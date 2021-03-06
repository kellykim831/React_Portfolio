import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf, FaFacebook } from "react-icons/fa";
import FooterPage from './footer';
import '../App.css';

const Contact = ({ contactEmail, contactPara, socialLinks }) => {

    return (
        <div className="contact_container">
            <h1>Let's Connect!</h1>
            <p>{contactPara}</p>
            <br></br>
            <a className="email_link" href={`mailto:${contactEmail}`}>
                {contactEmail}
            </a>
            <div className="social_links">
                <ul>
                    <li>
                        <a href={`mailto:${contactEmail}`}>
                            <FaEnvelope></FaEnvelope>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks[0].url}>
                            <FaLinkedin></FaLinkedin>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks[1].url}>
                            <FaGithub></FaGithub>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks[2].url}>
                            <FaFacebook></FaFacebook>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks[3].url}>
                            <FaFilePdf></FaFilePdf>
                        </a>
                    </li>
                </ul>
            </div>
            <br></br>
            <br></br>
            <br></br>           
            <div className="footer">
            <FooterPage></FooterPage>
            </div>
        </div>
    );
}

export default Contact;
