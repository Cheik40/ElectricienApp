import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}

export function NavLink({ href, children, onNavigate }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };
  
  return (
    <Link
      to={href}
      onClick={handleClick}
      className={`${
        isActive 
          ? 'text-yellow-600 bg-yellow-50 md:bg-transparent' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 md:hover:bg-transparent'
      } block px-3 py-2 rounded-md text-base font-medium transition-colors md:inline-block`}
    >
      {children}
    </Link>
  );
}