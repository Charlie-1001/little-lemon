import style from './BookingForm.module.css';
import lemonUp from '../assets/lemon-hanging.png';
import lemonDown from '../assets/lemon.png';
import { useFormik } from 'formik';
import * as Yup from "yup";

function BookingForm({ availableTimes, dispatch, submitForm }) {

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Please select a date."),
      time: Yup.string().required("Please select a time"),
      guests: Yup.number()
        .min(1, "Minimum 1 guest")
        .max(10, "Maximum 10 guests")
        .required("Required"),
      occasion: Yup.string().required("Please select on occasion."),
    }),
    onSubmit: (values) => {
      submitForm(values)
    }
  });

  return (
    <section className={style.bookingSection}>
      <div className={style.bookingContainer}>
        <h2 className="sub-title">Reservation Form</h2>

        <form
          className={style.bookingForm}
          onSubmit={formik.handleSubmit}
          noValidate
        >
          {/* DATE */}
          <div className={style.formGroup}>
            <label htmlFor="date" className="lead-text">
              Choose a date:
            </label>
            <input
              className="highlight-text"
              type="date"
              id="date"
              name="date"
              {...formik.getFieldProps("date")}
              onChange={(e) => {
                formik.handleChange(e);
                dispatch({type: "date-changed", payload: e.target.value});
              }}
            />
            {formik.touched.date && formik.errors.date && (
              <p className={style.error}>{formik.errors.date}</p>
            )}
          </div>

          {/* TIME */}
          <div className={style.formGroup}>
            <label htmlFor="time" className="lead-text">
              Choose a time:
            </label>
            <select
              className="highlight-text"
              id="time"
              name="time"
              {...formik.getFieldProps("time")}
            >
              <option value="">Select a time</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {formik.touched.time && formik.errors.time && (
              <p className={style.error}>{formik.errors.time}</p>
            )}
          </div>

          {/* GUESTS */}
          <div className={style.formGroup}>
            <label htmlFor="guests" className="lead-text">
              Number of guests:
            </label>
            <input
              className="highlight-text"
              type="number"
              min="1"
              max="10"
              id="guests"
              name="guests"
              {...formik.getFieldProps("guests")}
            />
            {formik.touched.guests && formik.errors.guests && (
              <p className={style.error}>{formik.errors.guests}</p>
            )}
          </div>

          {/* OCCASION */}
          <div className={style.formGroup}>
            <label htmlFor="occasion" className="lead-text">
              Occasion:
            </label>
            <select
              className="highlight-text"
              id="occasion"
              name="occasion"
              {...formik.getFieldProps("occasion")}
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {formik.touched.occasion && formik.errors.occasion && (
              <p className={style.error}>{formik.errors.occasion}</p>
            )}
          </div>

          <button
            type="submit"
            className={`${style.submitBtn} highlight-text`}
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          >
            Make Your Reservation
          </button>
        </form>

        {/* The decorative images */}
        <img
          className={style.lemonUp}
          src={lemonUp}
          alt="The hanging lemon"
        />
        <img
          className={style.lemonDown}
          src={lemonDown}
          alt="The lemon on the floor"
        />
      </div>
    </section>
  );
}

export default BookingForm;