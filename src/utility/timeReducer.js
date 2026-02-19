import { fetchAPI } from "../api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export function updateTime(state, action) {
  if (action.type === "date-changed") {
    return fetchAPI(new Date(action.payload));
  } else {
    return state;
  }
}