import React from 'react'
import '../style/MenuUser.scss'

const MenuUser = () => {
  return (
    <div className="desktop-menu">
      <ul>
        <li>
          <a href="/" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuUser