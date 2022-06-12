import React from 'react';
import { Link } from 'react-router-dom';// рендер без перезагрузки страницы
import { SupportForm } from '../SupportForm/SupportForm';

export const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={{ pathname: "support", state: { someValue: 'asdas' } }}>Support Form</Link>
      </li>
      <li>
        <Link to="name">Form name</Link>
      </li>
      <li>
        <Link to="auth">Auth name</Link>
      </li>
    </ul>
  )
}