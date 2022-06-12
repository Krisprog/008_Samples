import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Menu } from '../components/Menu';

export const MainLayout = props => {
  return (
    <div>
      <aside>
        <nav><Menu/></nav>
      </aside>
      <main>{renderRoutes(props.route.routes)}</main>
    </div>
  )
}