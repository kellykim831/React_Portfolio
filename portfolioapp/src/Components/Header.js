
import React from 'react';
import { Link } from 'react-router-dom'
const Header = ({ name, contactEmail }) => {
    return (
        <div>
            <div className="header_container stretch">
                <Link to="/"><h1>{name}.</h1></Link>
                <nav>
                    <ul>
                        <li><Link to="/about">My Bio</Link></li>
                        <li><a href={`mailto:${contactEmail}`}>Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;