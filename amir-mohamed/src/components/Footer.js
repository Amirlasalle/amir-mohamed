// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../App.css';


// const Footer = () => {
//   const navigate = useNavigate();

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'auto',
//     });
//   };


//   const handleFooterLinkClick = (url) => {
//     scrollToTop();
//     navigate(url);
//   };

//   return (

//     <footer className="mt-3 footer">
//       <p className='mt-3 text-center'>
//         Thank you for visiting my page! {' '}
//         <span
//           className="emoji"
//           role="img"
//           aria-label="heart"
//           aria-hidden="false"
//         >
//           ❤️
//         </span>{' '}
//         Hope to connect with you soon!
//       </p>



//       <div>
//         <a href="https://www.linkedin.com/in/amirlasalle" target="_blank" rel="noreferrer"> <i class="fa fa-linkedin-square fa-3x"></i></a>
//         <a href="https://www.github.com/amirlasalle"> <i class="fa fa-github-square fa-3x"></i></a>
//       </div>
//       <Link to="/" onClick={() => handleFooterLinkClick('/')} style={{ textDecoration: 'none' }} className='footer-text'>©2023, Miro Lasalle Productions</Link>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const handleFooterLinkClick = (url) => {
    scrollToTop();
    navigate(url);
  };

  return (
    <footer className="mt-3 footer text-center">
      <p className='mt-3'>
        Thank you for visiting my page!{' '}
        <span
          className="emoji"
          role="img"
          aria-label="heart"
          aria-hidden="false"
        >
          ❤️
        </span>{' '}
        Hope to connect with you soon!
      </p>

      <div className="d-flex justify-content-center align-items-center">
        <a href="https://www.linkedin.com/in/amirlasalle" target="_blank" rel="noreferrer">
          <i className="fa fa-linkedin-square fa-3x m-1" style={{ textDecoration: 'none' }}></i>
        </a>
        <a href="https://www.github.com/amirlasalle" target="_blank" rel="noreferrer">
          <i className="fa fa-github-square fa-3x m-1" style={{ textDecoration: 'none' }}></i>
        </a>
        <a href="https://www.instagram.com/ichigo23__/" target="_blank" rel="noreferrer">
          <i className="fa fa-instagram fa-3x m-1" style={{ textDecoration: 'none' }}></i>
        </a>
      </div>
      <Link to="/" onClick={() => handleFooterLinkClick('/')} style={{ textDecoration: 'none' }} className='footer-text'>
        ©2023, Miro Lasalle Productions
      </Link>
    </footer>
  );
};

export default Footer;
