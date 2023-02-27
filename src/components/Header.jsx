import React from 'react';

import logo from '../images/logo.svg';

export function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Mesto Логотип' className='header__logo' />
    </header>
  );
}
