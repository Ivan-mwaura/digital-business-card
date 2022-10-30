import React from "react"
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

const Footer = () =>{
    return(
        <div className="footer">
            <Facebook/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Twitter/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Linkedin/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Instagram/>
        </div>
    )
}
export default Footer;