import style from './Footer.module.css';
import footerImage from '../assets/Mario and Adrian A.jpg';

function Footer() {
  return (
    <footer className={style.footerSection}>
      <div className={style.footerImage}>
        <img src={footerImage} alt='The footer image' />
      </div>

      <nav>
        <h2 className='section-title'>Doormat Navigation</h2>
        <ul className='paragraph-text'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>

      <div>
        <h2 className='section-title'>Contact Us</h2>
        <address className='paragraph-text'>
          <p>Address: 123 Main Street Chicago, IL 60601</p>
          <p>Email: <a href='mailto:info@littlelemon.com'>info@littlelemon.com</a></p>
          <p>Phone: <a href='tel:+15551234567'>(555) 123-4567</a></p>
        </address>
      </div>

      <div>
        <h2 className='section-title'>Social Media Links</h2>
        <ul className='paragraph-text'>
          <li><a href="https://www.instagram.com/littlelemonrestaurant">Instagram</a></li>
          <li><a href="https://www.facebook.com/littlelemonrestaurant">Facebook</a></li>
          <li><a href="https://www.tiktok.com/@littlelemonrestaurant">TikTok</a></li>
        </ul>
      </div>

      <p className={`${style.copyrightText} paragraph-text`}>&copy; 2026 Little Lemon Restaurant. All rights reserved.</p>
    </footer>
  )
}

export default Footer;