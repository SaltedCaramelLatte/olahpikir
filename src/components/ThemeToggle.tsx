import React from "react";
import { Tab, Tabs } from "@nextui-org/react"
import { useState } from "react"
import { MdOutlineComputer, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"

type Mode = 'light' | 'dark' | 'system'

function ThemeToggle() {
  const initialTheme = localStorage.getItem('theme') as Mode || 'system'
  const [theme, setTheme] = useState<Mode>(initialTheme)

  return (
    <Tabs
      classNames={{
        panel: 'hidden',
        tabList: 'bg-transparent border border-gray-200 dark:border-gray-700',
      }}
      onSelectionChange={(key) => {
        const theme = key as Mode

        setTheme(theme)

        if (['dark', 'light'].includes(theme)) {
          localStorage.setItem('theme', theme)
        } else {
          localStorage.removeItem('theme')
        }

        if (key === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }}
      selectedKey={theme}
    >
      <Tab key={'light'}>
        <MdOutlineLightMode />
      </Tab>
      <Tab key={'system'}>
        <MdOutlineComputer />
      </Tab>
      <Tab key={'dark'}>
        <MdOutlineDarkMode />
      </Tab>
    </Tabs>
  )
}

export default ThemeToggle
