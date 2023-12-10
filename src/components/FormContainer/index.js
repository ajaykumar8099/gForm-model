import {useState} from 'react'
import {SiApacheopenoffice} from 'react-icons/si'
import {IoIosMailUnread} from 'react-icons/io'

import './index.css'

const FormContainer = () => {
  const [username, setUserName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [selectItem, setSelectItem] = useState('')
  const [isTrue, setIsTrue] = useState(false)

  const onChangeUserName = event => {
    setUserName(event.target.value)
  }

  const onChangeContactNumber = event => {
    setMobile(event.target.value)
  }

  const emailChange = event => {
    setEmail(event.target.value)
  }

  const passwordChange = event => {
    setPassword(event.target.value)
  }

  const onChangeCheckBox = () => {
    setShow(prev => !prev)
  }

  const item = event => {
    setSelectItem(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()
    setIsTrue(true)
    setMobile('')
    setUserName('')
    setEmail('')
    setPassword('')
  }
  const {value} = username
  return (
    <div className="bg-container">
      <nav className="nav-bar">
        <div className="nav-name">
          <h1 className="nav-head">Ajay</h1>
          <SiApacheopenoffice />
          <p> UnEmployed Organization.com</p>
        </div>
        <div className="nav-mail">
          <IoIosMailUnread />
          <p> Email: ajaykumar1@gmail.com</p>
        </div>
      </nav>
      <div className="page">
        <form onSubmit={submitForm}>
          <label htmlFor="name" className="label">
            Candidate Name:
          </label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={onChangeUserName}
            required
            className="input"
          />
          <br />
          <label htmlFor="mobile" className="label">
            Contact Number:
          </label>
          <input
            type="text"
            id="mobile"
            className="input"
            value={mobile}
            onChange={onChangeContactNumber}
            required
          />
          <br />
          <label htmlFor="email" className="label">
            Email Id:
          </label>
          <input
            type="text"
            id="email"
            className="input"
            required
            onChange={emailChange}
            value={email}
          />
          <br />
          <label htmlFor="date" className="label">
            Date of Birth :
          </label>
          <input type="date" id="date" className="select-option" />
          <br />
          <label htmlFor="pass" className="label">
            Set Password:
          </label>
          {show ? (
            <input
              type="text"
              id="pass"
              className="input"
              required
              onChange={passwordChange}
            />
          ) : (
            <input
              type="password"
              id="pass"
              className="input"
              required
              onChange={passwordChange}
            />
          )}
          <br />
          <input
            type="checkbox"
            id="show"
            className="input"
            onChange={onChangeCheckBox}
          />
          <label htmlFor="show" className="label">
            Show Password
          </label>
          <br />
          <label htmlFor="select" className="label">
            Education :
          </label>
          <select onChange={item} className="select-option">
            <option value="post graduate" className="options" selected>
              post graduate
            </option>
            <option value="graduate" className="options">
              graduate
            </option>
            <option value="inter" className="options">
              intermediate
            </option>
            <option value="ssc" className="options">
              secondary school
            </option>
            <option value="others" className="options">
              others
            </option>
          </select>
          <br />
          <span className="label radio">Gender : </span>
          <label htmlFor="male" className="label-radio">
            Male
          </label>
          <input
            id="male"
            type="radio"
            name="gender"
            checked
            className="radio-btn"
          />
          <label htmlFor="female" className="label-radio">
            Female
          </label>
          <input id="female" type="radio" name="gender" className="radio-btn" />
          <br />
          <button type="submit" className="button">
            submit
          </button>
          {isTrue ? (
            <p className="red">
              * Hai {value} Your Data has been Hacked By Ajaykumar
            </p>
          ) : null}
        </form>
      </div>
    </div>
  )
}
export default FormContainer
