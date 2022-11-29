import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
const NavBar = () => {
    return (
        <div>
            <nav className='Navbar'>
                <div>LOGO</div>
                <ul className='ul-Navbar'>
                    <Link
                        to="home3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li className='in'>Inicio</li>
                    </Link>
                    <Link
                        to="home6"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li className='in'>Roadmap</li>
                    </Link>
                    <Link
                        to="home7"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li className='in'>Invierte</li>
                    </Link>
                    <Link
                        to="home8"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li className='in'>Nosotros</li>
                    </Link>
                    <li className='in'>Preguntas</li>
                </ul>
                <button>
                    Launch <br />
                    App
                </button>
            </nav>
        </div>
    );
};

export default NavBar;