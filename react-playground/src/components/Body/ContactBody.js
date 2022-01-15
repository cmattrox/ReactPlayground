import emailjs, { init } from 'emailjs-com'
import React, { useRef } from 'react'
import apiKey from '../../emailkey'
import LinkedIn from '../../images/LI-In-Bug.png'
import Github from '../../images/GitHub-Mark-120px-plus.png'
import $ from 'jquery'
import '../../App.css'
import { contactInfo } from '../../data/data'
init(apiKey.USER_ID)

function ContactBody() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        apiKey.SERVICE_ID,
        apiKey.TEMPLATE_ID,
        form.current,
        apiKey.USER_ID,
      )
      .then((res, err) => {
        let frm = $('#contact-emailjs')[0]
        frm.reset()
        console.log(err ? err.text : res.text)
      })
  }

  return (
    <main>
      {contactInfo.map((item, idx) => (
        <div
          className="bg-gray-darker relative w-full h-screen overflow-hidden pt-5 flex justify-center pb-5"
          id="body"
        >
          <div className="bg-gray-lightest w-4/5 h-full pt-5 rounded">
            <h1 className="text-gray-darkest text-center text-7xl">
              {item.header}
            </h1>
            <div className="border-gray-darkest border-4 rounded-lg mt-10 mx-20">
              <form id="contact-emailjs" ref={form} onSubmit={sendEmail}>
                {item.formInputs.map(
                  (
                    { type, name, id, required, text, placeholder, pattern },
                    idx,
                  ) => (
                    <>
                      {required ? (
                        <>
                          {type === 'textarea' ? (
                            <div className="grid grid-cols-6 pt-5 pb-5 h-32 pr-5">
                              <label
                                for="message"
                                className="col-span-1 text-gray-darkest text-2xl pl-5"
                              >
                                Message:{' '}
                              </label>
                              <textarea
                                type="text"
                                name="message"
                                id="message"
                                className="text-gray-darkest text-2xl rounded w-full col-span-5 p-1"
                                required
                              ></textarea>
                              <br />
                            </div>
                          ) : (
                            <div className="pt-5 grid grid-cols-6 pr-5">
                              <label
                                for={name}
                                className="col-span-1 text-gray-darkest text-2xl pl-5"
                              >
                                {text}
                              </label>
                              <input
                                type={type}
                                name={name}
                                id={id}
                                className="text-gray-darkest pl-1 text-2xl rounded w-full col-span-5"
                                required
                              />
                              <br />
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="pt-5 grid grid-cols-6 pr-5">
                          <label
                            for={name}
                            className="col-span-1 text-gray-darkest text-2xl pl-5"
                          >
                            {text}
                          </label>
                          <input
                            type={type}
                            name={name}
                            id={id}
                            className="text-gray-darkest pl-1 text-2xl rounded w-full col-span-5"
                          />
                          <br />
                        </div>
                      )}
                    </>
                  ),
                )}
                <div className="grid justify-items-end">
                  <input
                    type="submit"
                    value="Send Email"
                    className="bg-gray-darker col-span-1 text-gray-lightest rounded p-2 m-5 cursor-pointer"
                  ></input>
                </div>
              </form>
            </div>
            <div className="flex justify-center pt-5 text-gray-darkest">
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/welchcharles1/"
              >
                <img className="h-10 w-12" src={LinkedIn}></img>
              </a>
              <a
                className="cursor-pointer pl-5"
                href="https://github.com/cmattrox"
              >
                <img className="h-10 w-10" src={Github}></img>
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}

export default ContactBody
