import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface CustomNavLinkProps extends NavLinkProps {
  activeClassName: string;
}

const Tabs: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <CustomNavLink to='/' activeClassName='active' end>
            All Tasks
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to='/deleted' activeClassName='active'>
            Deleted Tasks
          </CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};

const CustomNavLink = ({ activeClassName, ...props }: CustomNavLinkProps) => {
  return <NavLink {...props} className={({ isActive }) => (isActive ? activeClassName : '')} />;
};

export default Tabs;
