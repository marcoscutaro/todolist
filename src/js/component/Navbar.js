import React from 'react';

const Navbar = (props) => {
    return (
       <>
       <nav className="navbar navbar-expand-md  bg-dark">
       <a href="#" className='navbar-brand fs-3 ms-3 text-light'>{props.brand}</a>
       <button 
       className="navbar-toggler m-3 text-white " 
       type='button' 
       data-bs-toggle="collapse"
       data-bs-target="#btn" 
       >
        <i className='bx bx-menu bx-md'></i>
       </button>

        <div className="collapse navbar-collapse bg-darks " id="btn">
            <ul className="navbar-nav ms-auto ">
                <li className="nav-item ">
                    <a href="#" className='nav-link text-light mx-3' >Home</a>
                </li>
                <li className="nav-item text-light">
                    <a href="#" className='nav-link text-light mx-3' >About</a>
                </li>
                <li className="nav-item">
                    <a href="#" className='nav-link text-light mx-3' >Services</a>
                </li>
                <li className="nav-item">
                    <a href="#" className='nav-link text-light mx-3' >Contacts</a>
                </li>
            </ul>
        </div>
        </nav>
       </>
    );
}

export default Navbar;
