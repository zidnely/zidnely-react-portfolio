import React from "react"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
// import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://github.com/zidnely" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/zidnely/"
        target="_blank" rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  )
}

export default HeaderSocials
