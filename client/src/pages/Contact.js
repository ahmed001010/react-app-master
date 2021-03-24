import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as Icon from 'react-feather'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import { baseUrl } from '../utils/server_details'

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState([])
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const submitHandler = event => {
    event.preventDefault()
    if (!formdata.name) {
      setError(true)
      setMessage('Name is required')
    } else if (!formdata.email) {
      setError(true)
      setMessage('Email is required')
    } else if (!formdata.subject) {
      setError(true)
      setMessage('Subject is required')
    } else if (!formdata.message) {
      setError(true)
      setMessage('Message is required')
    } else {
      setError(false)
      setMessage('You message has been sent!!!')
    }
    const { name, email, message, subject } = formdata
    console.log(formdata)
    axios
      .post(`${baseUrl}/sendmail`, {
        name,
        email,
        message,
        subject
      })
      .then(response => {
        console.log(response)
        setFormdata({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  const handleChange = event => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  

  const handleAlerts = () => {
    if (error && message) {
      return <div className='alert alert-danger mt-4'>{message}</div>
    } else if (!error && message) {
      return <div className='alert alert-success mt-4'>{message}</div>
    } else {
      return null
    }
  }

  useEffect(() => {
    axios.get('/api/contactinfo').then(response => {
      setPhoneNumbers(response.data.phoneNumbers)
    })
  }, [])

  return (
    <Layout>
      <div className='mi-contact-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Contactformulier' />
          <div className='row'>
            <div className='col-lg-6'>
              <div className='mi-contact-formwrapper'>
                <h4>Get In Touch</h4>
                <form
                  action='#'
                  className='mi-form mi-contact-form'
                  onSubmit={submitHandler}
                >
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-name'>Uw naam*</label>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='name'
                      id='contact-form-name'
                      value={formdata.name}
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-email'>
                      Uw email*
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='email'
                      id='contact-form-email'
                      value={formdata.email}
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-subject'>
                      Onderwerp*
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='subject'
                      id='contact-form-subject'
                      value={formdata.subject}
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-message'>
                      Uw bericht*
                    </label>
                    <textarea
                      onChange={handleChange}
                      name='message'
                      id='contact-form-message'
                      cols='30'
                      rows='6'
                      value={formdata.message}
                    ></textarea>
                  </div>
                  <div className='mi-form-field'>
                    <button className='mi-button' type='submit'>
                      Verzend mail
                    </button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mi-contact-info'>
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.Phone />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>WhatsApp</h6>
                        <div >
                          <p >
                            +31642124957 
                          </p>
                        </div>
                    </div>
                  </div>
                
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.Mail />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Email</h6>
                        <p >
                          <a href="/">klantenservice@sertic.nl</a>
                        </p>
                    </div>
                  </div>
                {!phoneNumbers ? null : (
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.MapPin />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Adres</h6>
                      <p>Netherlands - Utrecht - IJsselstein - Zenderpark - Osakastraat 9</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
