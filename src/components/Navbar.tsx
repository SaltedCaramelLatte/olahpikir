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

const sections = [
  { label: 'Home', id: 'home' },
  { label: 'Menu', id: 'menu' },
  { label: 'Gallery', id: 'gallery' }
];

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTopOffset = section.offsetTop;
      window.scrollTo({
        top: sectionTopOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleSectionClick = (id: string): void => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`; 
    } else {
      scrollToSection(id);
    }
    setIsMenuOpen(false); 
  };

  return (
    <Navbar
      className="bg-transparent border-b border-light-border dark:border-dark-border backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50 flex justify-between items-center"
      style={{ height: '60px' }}
    >
      <NavbarBrand className="ml-4">
        <p className="font-bold text-light dark:text-light">Wico Gowa</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 justify-center mx-auto" style={{ flex: 1 }}>
        {sections.map(section => (
          <NavbarItem key={section.id}>
            <Link
              href="#"
              aria-current={window.location.hash === `#${section.id}` ? "page" : undefined}
              className={`${window.location.hash === `#${section.id}` ? "text-light font-semibold" : "text-light-text"
                } dark:text-dark-text`}
              onClick={() => handleSectionClick(section.id)}
              style={{ padding: '8px 12px', borderRadius: '8px', transition: 'background 0.3s' }}
            >
              {section.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden flex items-center mr-4" justify="end">
        <Dropdown isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} placement="bottom-end" backdrop="blur">
          <DropdownTrigger>
            <Button
              isIconOnly
              variant="bordered"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Menambahkan aria-label untuk aksesibilitas
              className="text-light dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Navigation Menu"
            variant="faded"
            className="bg-light-background dark:bg-dark-background shadow-lg rounded-lg border border-light-border dark:border-dark-border"
            style={{ width: '150px', padding: '8px 0' }}
          >
            {sections.map(section => (
              <DropdownItem
                key={section.id}
                className={`my-2 text-light dark:text-dark-text rounded-md transition-colors duration-200 ${window.location.hash === `#${section.id}` ? "bg-light text-white" : "hover:bg-light-accent dark:hover:bg-dark-accent"
                  }`}
                onClick={() => handleSectionClick(section.id)}
                style={{ padding: '8px 12px' }}
              >
                {section.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
