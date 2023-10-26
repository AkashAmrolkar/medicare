import React, { useState } from 'react'

const Contact = () => {
  const [contactVal, setContactVal] = useState({
    name: '',
    email: '',
    message: ''
  })

  const changeValue = (e) => {
    e.preventDefault();
    setContactVal({
      ...contactVal,
      [e.target.name]: e.target.value
    })

  }
  return (
    <div className="bg-gray-100 py-12">
    <div className="container mx-auto max-w-screen-xl p-4">
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border rounded-md w-full py-2 px-3"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              onChange={changeValue}
              value={contactVal.name}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded-md w-full py-2 px-3"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={changeValue}
              value={contactVal.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="border rounded-md w-full py-2 px-3 h-32"
              id="message"
              name="message"
              placeholder="Your Message"
              onChange={changeValue}
              value={contactVal.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact