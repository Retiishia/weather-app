import React, { useState } from "react"

const Modal = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <>
      <button
        className="inline-flex py-2 px-4 items-center gap-3 rounded-full text-text/100 hover:opacity-100 opacity-90 bg-surface0 transition-all active:transform active:scale-x-90 active:scale-y-90"
        onClick={openModal}
      >
        <svg
          data-src="https://s2.svgbox.net/materialui.svg?ic=mail"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          color=""
          data-id="svg-loader_9"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        Contact Me
      </button>

      {showModal && (
        <div className="fixed h-screen w-screen overflow-hidden z-auto top-0 left-0 bottom-0 right-0 opacity-100 backdrop-blur-2xl astro-A4YOCCPA">
          <div className="relative mx-4 opacity-100 h-screen w-screen rounded-3xl transition-all duration-300 ease-in-out border-base flex items-center astro-A4YOCCPA">
            <div className="max-w-3xl lg:mx-auto mr-8 text-text astro-A4YOCCPA">
              <div className="text-3xl font-black text-primary astro-A4YOCCPA">
                Get In Touch
              </div>
              <div
                className="absolute right-8 top-8 text-text items-center gap-2 flex astro-A4YOCCPA"
                onClick={closeModal}
              >
                <span className="bg-lavender opacity-50 hover:opacity-100 text-crust text-xs px-2 py-1 rounded lg:block astro-A4YOCCPA cursor-pointer">
                  esc
                </span>
                <svg
                  data-src="https://s2.svgbox.net/materialui.svg?ic=close"
                  width="24"
                  height="24"
                  id="close"
                  className="hover:text-text cursor-pointer astro-A4YOCCPA"
                />
              </div>

              <form
                action="https://formspree.io/f/meqderqp"
                method="POST"
                className="astro-A4YOCCPA"
              >
                <p className="mt-2 text-text astro-A4YOCCPA">
                  Do you have an interesting job opportunity? Want to ask me a
                  question? Or, just want to connect? Feel free to contact me.
                </p>

                <div className="lg:flex-row flex-col flex mt-6 gap-4 astro-A4YOCCPA">
                  <input
                    required
                    name="name"
                    type="text"
                    className="flex-1 bg-mantle p-3 rounded outline-none placeholder:text-text text-input text-lg w-auto lg:w-64 border border-lavender astro-A4YOCCPA"
                    placeholder="Full Name"
                  />

                  <input
                    required
                    name="email"
                    type="email"
                    className="flex-1 bg-mantle p-3 rounded outline-none placeholder:text-text text-input text-lg w-auto lg:w-64 border border-lavender astro-A4YOCCPA"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  required
                  name="message"
                  className="w-full bg-mantle p-3 rounded outline-none placeholder:text-text text-input mt-4 resize-none h-64 text-lg border border-lavender astro-A4YOCCPA"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-lg bg-lavender opacity-50 py-3 px-5 text-sm leading-5 font-semibold text-crust transition-all hover:opacity-100 active:scale-95 active:transform-none mt-4 astro-A4YOCCPA"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
