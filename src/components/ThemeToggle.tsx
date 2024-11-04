import { Tab, Tabs } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { MdOutlineComputer, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

type Mode = 'light' | 'dark' | 'system';

function ThemeToggle() {
  const initialTheme = (localStorage.getItem('theme') as Mode) || 'system';
  const [theme, setTheme] = useState<Mode>(initialTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, [theme]);

  return (
    <Tabs
    
      classNames={{
        panel: 'hidden',
        tabList: 'overflow-x-auto hide-scrollbar bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg flex p-1', // Styling minimalis untuk tab list
      }}
      selectedKey={theme}
      onSelectionChange={(key) => {
        const selectedTheme = key as Mode;

        setTheme(selectedTheme);

        if (['dark', 'light'].includes(selectedTheme)) {
          localStorage.setItem('theme', selectedTheme);
        } else {
          localStorage.removeItem('theme'); // Hapus preferensi tema jika memilih 'system'
        }

        if (selectedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }}
    >
      <Tab key="light" aria-label="Light Mode">
        <MdOutlineLightMode className={`w-6 h-6 ${theme === 'light' ? 'text-yellow-500' : 'text-gray-500'}`} />
      </Tab>
      <Tab key="system" aria-label="System Mode">
        <MdOutlineComputer className={`w-6 h-6 ${theme === 'system' ? 'text-blue-500' : 'text-gray-500'}`} />
      </Tab>
      <Tab key="dark" aria-label="Dark Mode">
        <MdOutlineDarkMode className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-500' : 'text-gray-500'}`} />
      </Tab>
    </Tabs>
  );
}

export default ThemeToggle;
