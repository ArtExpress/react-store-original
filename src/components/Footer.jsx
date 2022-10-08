import React from 'react'
import "./Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className="footer__toTop">
            <h3>Back to top</h3>
        </div>

        <div className="footer__description">
            <div className="footer__list">
            
                <a>Home</a>
                <a>About</a>
                <a>Conditions of Use</a>
                <a>Privacy Notice</a>
            </div>
            <div className="footer__copyright">
                Copyright &copy; 1994-2022, Shopping Store Original
            </div>
        </div>
    </div>
  )
}

export default Footer