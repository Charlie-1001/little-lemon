import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTime } from "../utility/timeReducer";
import { fetchAPI } from "../api";

jest.mock("../api");

describe("BookingForm Component (Basic Behavior)", () => {
  const mockAvailableTimes = ["17:00", "18:00"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  const renderForm = () =>
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the Reservation Form heading", () => {
    renderForm();
    expect(
      screen.getByRole("heading", { name: /reservation form/i })
    ).toBeInTheDocument(); // check if the heading text is rendered
  });

  test("submit button enables only after all required fields are filled", async () => {
    renderForm();
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeDisabled(); //the submit button should be disabled before the inputs are filled
    const dateInput = screen.getByLabelText(/choose a date/i);
    const timeSelect = screen.getByLabelText(/choose a time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    await userEvent.type(dateInput, "2025-12-25");
    await userEvent.selectOptions(timeSelect, ["17:00"]);
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, "3");
    await userEvent.selectOptions(occasionSelect, ["Birthday"]);
    expect(submitButton).not.toBeDisabled(); // the button should be enabled when all the inputs are filled correctly
  });
});

describe("timeReducer Logic", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes returns fetched times", () => {
    const mockTimes = ["17:00", "18:00"];
    fetchAPI.mockReturnValue(mockTimes);
    const result = initializeTimes();
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTimes);
  });

  test("initializeTimes handles empty API response", () => {
    fetchAPI.mockReturnValue([]);
    const result = initializeTimes();
    expect(result).toEqual([]);
  });

  test("updateTime returns new times when date changes", () => {
    const mockTimes = ["19:00", "20:00"];
    fetchAPI.mockReturnValue(mockTimes);
    const state = ["17:00"];
    const action = {
      type: "date-changed",
      payload: "2025-01-01",
    };
    const result = updateTime(state, action);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTimes);
  });

  test("updateTime returns existing state for unknown action", () => {
    const state = ["17:00"];
    const action = { type: "unknown-action" };
    const result = updateTime(state, action);
    expect(fetchAPI).not.toHaveBeenCalled();
    expect(result).toEqual(state);
  });
});
