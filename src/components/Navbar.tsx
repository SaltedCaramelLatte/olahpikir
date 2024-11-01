import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import coffeeImage from "@/images/coffee.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavbarItemLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

const NavbarItemLink: React.FC<NavbarItemLinkProps> = ({ href, label, isActive }) => (
  <NavbarItem isActive={isActive}>
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      color={isActive ? "secondary" : "foreground"}
      className={`text-${isActive ? 'primary' : 'light-text dark:text-dark-text'} 
        ${isActive ? 'font-semibold' : 'hover:text-primary dark:hover:text-primary'}`}
    >
      {label}
    </Link>
  </NavbarItem>
);

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Navbar 
      className="bg-transparent border-b border-light-border dark:border-dark-border backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50" 
      style={{ height: '60px' }}
    >
      <NavbarBrand>
        <img src={coffeeImage} alt="Logo" className="h-10 mr-2" />
        <p className="font-bold text-primary dark:text-primary">Kedai Kopi</p>
      </NavbarBrand>

      {/* Main Menu - Desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {['Features', 'Customers', 'Integrations'].map((item, index) => (
          <NavbarItemLink
            key={item}
            href="#"
            label={item}
            isActive={item === 'Customers'} // Change to proper active check
          />
        ))}
      </NavbarContent>

      {/* User Profile End Content */}
      <NavbarContent justify="end" className="flex items-center">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <button onClick={toggleMenu} className="p-2 text-secondary transition-transform">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" className="bg-light-background dark:bg-dark-background">
            {['My Settings', 'Team Settings', 'Analytics'].map(item => (
              <DropdownItem key={item.toLowerCase().replace(' ', '_')} className="text-light-text dark:text-dark-text">
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
