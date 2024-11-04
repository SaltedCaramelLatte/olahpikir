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
        <p className="font-bold text-primary dark:text-primary">Kedai Kopi</p>
      </NavbarBrand>

      {/* Main Menu - Desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {['Features', 'Customers', 'Integrations'].map((item, index) => (
          <NavbarItemLink
            key={item}
            href="#"
            label={item}
            isActive={item === 'Customers'}
          />
        ))}
      </NavbarContent>

      {/* User Profile End Content */}
      <NavbarContent justify="end" className="flex items-center">
        <Dropdown backdrop="blur" placement="bottom-end">
          <DropdownTrigger>
            <Button 
              isIconOnly 
              variant="bordered" 
              className="p-2 text-secondary transition-transform hover:bg-light-accent dark:hover:bg-dark-accent"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Profile Actions" className="bg-light-background dark:bg-dark-background">
            {['My Settings', 'Team Settings', 'Analytics'].map(item => (
              <DropdownItem key={item.toLowerCase().replace(' ', '_')} className="text-light-text dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent">
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
