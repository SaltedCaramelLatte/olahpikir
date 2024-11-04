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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {['Features', 'Customers', 'Integrations'].map((item) => (
          <NavbarItemLink
            key={item}
            href="#"
            label={item}
            isActive={item === 'Customers'}
          />
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="flex items-center">
        <Dropdown placement="bottom-end" backdrop="blur">
          <DropdownTrigger>
            <Button
              isIconOnly
              variant="bordered"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </Button>
          </DropdownTrigger>
          <DropdownMenu

            aria-label="Profile Actions"
            variant="faded"
            className="px-4 py-2 bg-light-background dark:bg-dark-background shadow-lg rounded-lg border border-light-border dark:border-dark-border"
          >
            <DropdownItem
              key="features"
              className="my-2 text-secondary hover:bg-light-accent dark:hover:bg-dark-accent rounded-md border border-transparent hover:border-light-border dark:hover:border-dark-border transition-colors duration-200"
            >
              Features
            </DropdownItem>
            <DropdownItem
              key="customers"
              className="my-2 text-secondary hover:bg-light-accent dark:hover:bg-dark-accent rounded-md border border-transparent hover:border-light-border dark:hover:border-dark-border transition-colors duration-200"
            >
              Customers
            </DropdownItem>
            <DropdownItem
              key="integrations"
              className="my-2 text-secondary hover:bg-light-accent dark:hover:bg-dark-accent rounded-md border border-transparent hover:border-light-border dark:hover:border-dark-border transition-colors duration-200"
            >
              Integrations
            </DropdownItem>
          </DropdownMenu>

        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
