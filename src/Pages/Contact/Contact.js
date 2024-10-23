import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import { toast } from 'react-hot-toast'
import contactBanner from '../../assets/images/contact-banner.jpg'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_vgnpacn',
        'template_21h6qoc',
        form.current,
        'Yg0HVONj1s44cR90M'
      )
      .then(
        (result) => {
          toast.success('Mail Sent Successfully')
        },
        (error) => {
          toast.error(error.message)
        }
      )
    e.target.reset()
  }

  return (
    <div>
      <div
        className='hero min-h-screen bg-base-200'
        style={{ backgroundImage: `url(${contactBanner})` }}>
        <div className='card w-2/3 shadow-2xl bg-base-100'>
          <div className='card-body'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter Your Name'
                  name='client-name'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='Enter Your Email'
                  className='input input-bordered'
                  name='email'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Message</span>
                </label>
                <textarea
                  className='textarea textarea-bordered h-52'
                  placeholder='Enter Your Message'
                  name='message'></textarea>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
