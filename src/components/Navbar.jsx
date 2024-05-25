import React, { useState } from 'react';
import { Gi3dHammer, GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';
import { data } from "../restApi.json";

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <nav>
            <div className="logo">PARTH</div>
            <GiHamburgerMenu onClick={() => setShow(!show)} />
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className='links'>
                    {
                        data[0].navbarLinks.map(element => (
                            <Link 
                                to={element.link} 
                                key={element.id}
                                spy={true} 
                                smooth={true} 
                                duration={500}
                            >
                                {element.title}
                            </Link>
                        )
                    )
                    }
                </div>
                
            </div>
        
        </nav>
    );
}

export default Navbar;
