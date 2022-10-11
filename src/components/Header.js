import React from 'react'
import {Link} from 'react-router-dom'
import './footer&header.css'


export default function Header() {
  return (
   
        <ul className="menu">
            <li className="logo">
              { <img src=".\assets\png\humus_salam.png" alt="logo"/>}
            </li>
            <Link to='/'>
              <li>Home Page</li>
            </Link>
            <Link to='/Breakfast'>
              <li>Breakfast</li>
            </Link>
            <Link to='/Lunch'>
              <li>Lunch</li>
            </Link>
            <Link to='/Dinner'>
              <li>Dinner</li>
            </Link>
            <Link to='/Soup'>
              <li>Soup</li>
            </Link>
            <Link to='/Sweet'>
              <li>Sweet</li>
            </Link>
            <Link to='/Kitchen hacks'>
              <li>Kitchen hacks</li>
            </Link>
        </ul>
  )  
}
