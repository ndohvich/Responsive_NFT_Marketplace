import React from 'react'
import styled from "styled-components";
import {AiFillFacebook} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {FaTwitterSquare, FaInstagramSquare} from "react-icons/fa";
import {MdEmail, MdPhoneInTalk} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
import logo from "../assets/logo.png";

export default function Footer() {
    const servicesLinks = ["Art", "Common", "Trading", "Rare", "Generic"];
    const companyLinks = ["Home", "About", "Marketplace", "Sellers", "Create"];
    const contactInfo = [
        {
            icon: <MdEmail />,
            value: "ndohmoise@gmail.com",
        },
        {
            icon: <MdPhoneInTalk />,
            value: "+237 6955994053",
        },
        {
            icon: <IoLocationSharp />,
            value: "Ebolowa, Cameroon",
        },
    ]
  return (
    <div>Footer</div>
  )
}
