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
} from "@nextui-org/react";
import coffeeImage from "@/images/coffee.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar className="bg-light-background dark:bg-dark-background border-b border-light-border dark:border-dark-border">
      <NavbarBrand>
        <img src={coffeeImage} alt="Logo" className="h-10 mr-2" />
        <p className="font-bold text-primary dark:text-primary">Kedai Kopi</p>
      </NavbarBrand>

      {/* Menu Utama - Desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary" className="text-primary dark:text-primary font-semibold">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Konten Akhir - Profil User */}
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <button onClick={toggleMenu} className="p-2 text-secondary transition-transform">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" className="bg-light-background dark:bg-dark-background">
            <DropdownItem key="profile" className="h-14 gap-2 text-light-text dark:text-dark-text">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings" className="text-light-text dark:text-dark-text">My Settings</DropdownItem>
            <DropdownItem key="team_settings" className="text-light-text dark:text-dark-text">Team Settings</DropdownItem>
            <DropdownItem key="analytics" className="text-light-text dark:text-dark-text">Analytics</DropdownItem>
            <DropdownItem key="system" className="text-light-text dark:text-dark-text">System</DropdownItem>
            <DropdownItem key="configurations" className="text-light-text dark:text-dark-text">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback" className="text-light-text dark:text-dark-text">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" className="text-red-500 dark:text-red-400">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
