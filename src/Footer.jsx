import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import { Switch } from "@headlessui/react"

const Footer = () => {
  const [mode, setMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark:latte", mode)
  }, [mode])

  const handleToggle = () => {
    setMode((prevMode) => !prevMode)
  }

  return (
    <>
      <div className="absolute bottom-0">
        <div className="flex justify-center lg:mt-12">
          <img
            src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true"
            alt="catppuccin's Cat"
          />
        </div>
        <footer className="text-base text-black px-4 max-w-3xl w-full flex justify-between mx-auto items-center mb-12">
          <div className="opacity-50 text-subtext0">
            © Farhan Aziz @ 2023
          </div>
          <div className="flex gap-4 items-center">
            <Switch
              checked={mode}
              onChange={handleToggle}
              className={`${mode ? "bg-base" : "bg-base"} ${
                mode ? "dark:bg-surface0" : "dark:bg-surface0"
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span
                className={`${
                  mode ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform ${
                  mode ? "dark:bg-text" : "bg-text"
                } rounded-full`}
              />
            </Switch>
            <Modal />
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
