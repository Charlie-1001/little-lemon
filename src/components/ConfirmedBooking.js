import { useState, useEffect } from 'react';
import style from './ConfirmedBooking.module.css';
import logo from '../assets/Logo.svg';
import lemonLeaves from '../assets/lemon-leaves.png';

function ConfirmedBooking() {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const storedBookingData = localStorage.getItem("booking");
    if (storedBookingData) {
      setBookingData(JSON.parse(storedBookingData));
    }
  }, [])

  return bookingData && (
    <section className={style.confirmedBookingSection}>
      <div className={`${style.receipt} paragraph-text`}>
        <img className={`${style.leaves} ${style.leavesLeft}`} src={lemonLeaves} alt='the lemon leaves' />
        <img className={`${style.leaves} ${style.leavesRight}`} src={lemonLeaves} alt='the lemon leaves' />
        <img className={style.logo} src={logo} alt='the little lemon restaurant logo' />

        <h1 className='card-title'>Booking Confirmed!</h1>
        <p>Your reservation has been successfully received.</p>
        <h1 className='card-title'>Booking Details</h1>

        <ul className={`${style.detailContainer}`}>
          <li>Date: <span>{bookingData.date}</span> </li>
          <li>Time: <span>{bookingData.time}</span></li>
          <li>Number of guests: <span>{bookingData.guests}</span></li>
          <li>Occasion: <span>{bookingData.occasion}</span></li>
        </ul>

        <p>We look forward to welcoming you and ensuring you have a wonderful dining experience.</p>
        <h1 className='card-title'>Thank You!</h1>
      </div>
    </section>
  )
}

export default ConfirmedBooking;