import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import NumericInput from 'react-numeric-input'

import icon from '../../assets/logo.png'
import open_file from '../../assets/open.png'
import save_code from '../../assets/save.png'
import copy_code from '../../assets/copy.png'
import dark_theme from '../../assets/dark.png'
import light_theme from '../../assets/light.png'

import Auth from '../Auth/Auth'
import './Navbar.css'

const Navbar = ({handleAuth}) => {
  const languages = [
		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
    { value: "html", label: "HTML" },
    { value: "javascript", label: "JavaScript" },
	];

  const [userLang, setUserLang] = useState(languages[2])
  const [auth, setAuth] = useState(false)
  const [theme, setTheme] = useState("dark")

  const handleClick = () =>{
    handleAuth()
  }

  return (
    <div className='main-nav'>
        <div className='nav-logo'>
          <img src={icon} alt='logo' style={{width:"50px"}}/>
          <p style={{margin:"10px"}}>CodER.TxT</p>
          <button><img src={open_file} alt='Save' style={{width:"30px"}}/>Open</button>
          <button><img src={save_code} alt='Save' style={{width:"25px"}}/>Save</button>
          <button><img src={copy_code} alt='Save' style={{width:"15px"}}/>Copy</button>
        </div>
        <div>
          <label htmlFor="language">Select Language</label>
          <Select options={languages} value={userLang}
              onChange={(e) => setUserLang(e.value)} 
              placeholder={userLang} name='language' 
              required/>
        </div>
        <div>
          <label htmlFor='font-size'>Font Size</label>
          <NumericInput min={5} max={50} value={20}/>
        </div>
        <button>Run</button>
        <div>
          {theme === 'light' ? <img src={light_theme} alt='light' style={{width:"30px"}} /> :
          <img src={dark_theme} alt='dark' style={{width:"30px"}}/>}
          <button onClick={handleClick}>Log In</button>
        </div>
    </div>
  )
}

export default Navbar
