import React from 'react'
import './footer&header.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <div className="footer-2 bg-red-900 flex ">
      <ul class="footer-links">
            <li class="footer-2-text">Privacy</li>
            <li class="footer-2-text">Terms & Condition</li>
            <li class="footer-2-text">Settings</li>
          </ul>
          <div class="footer-social">
            <div >
              <FacebookIcon />
            </div>
            <div >
              <InstagramIcon />
            </div>
           <div >
              <TwitterIcon />
           </div>
        </div>
        <p class="copyright">Copyright © 2022 - Sadaf, Patrícia, Shir & Andrea</p>

    </div>
  )
}
