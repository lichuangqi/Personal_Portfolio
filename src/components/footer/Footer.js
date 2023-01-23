import './footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">Charlie</h1>
        <ul className='footer__list'>
          <li><a href='#about' className='footer__link'>About</a></li>
          <li><a href='#portfolio' className='footer__link'>Portfolio</a></li>
          <li><a href='#testimonials' className='footer__link'>Testimonials</a></li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/lcq0406886960" className="footer__social-link" target="_blank"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/cq.lee.518/" className="footer__social-link" target="_blank"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/chuangqi-li/" className="footer__social-link" target="_blank"><i className="bx bxl-linkedin"></i></a>
        </div>
        <span className='footer__copy'>&#169; Charlie Lee. All rigths reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer;