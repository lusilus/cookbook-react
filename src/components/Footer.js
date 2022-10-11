import React from 'react'
import './footer&header.css'

export default function Footer() {
  return (
    <div className="footer-2">
      <ul class="footer-links">
            <li class="footer-2-text">Privacy</li>
            <li class="footer-2-text">Terms & Condition</li>
            <li class="footer-2-text">Settings</li>
          </ul>
          <div class="footer-social">
            <div class="social-icon"><img src="./assets/Facebook.svg" alt="Facebook"/></div>
            <div class="social-icon"><img src="./assets/Instagram.svg" alt="instagram"/></div>
           <div class="social-icon"><img src="./assets/Twitter.svg" alt="Twitter"/></div>
        </div>
        <p class="copyright">Copyright © 2022 - Sadaf, Patrícia, Shir & Andrea</p>

    </div>
  )
}
