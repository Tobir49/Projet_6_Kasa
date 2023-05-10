import footer from '../images/footer.webp';
import "./footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={footer} alt="Logo" className='footer-logo' />
            <p className='footer-subtitle'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
  };
  
  export default Footer;