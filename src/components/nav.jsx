import React from 'react'
import logo from '../assets/swiggy.png'
import {RiArrowDownSLine,  } from "react-icons/ri";
import {FiSearch, FiUser } from "react-icons/fi";
import {IoIosHelpBuoy} from 'react-icons/io'
import {MdPolymer} from 'react-icons/md'
import {IoCartOutline} from 'react-icons/io5'

function nav() {
    return (
        <>
            <nav>
                <div className='w-100 bg-white nav-div flex p-1 '>
                    <div className='nav-inner-div1 flex ' >

                        <img src={logo} className='nav-logo h-100' alt="logo" />

                        <div className='flex mt-3 nav-location-div' >

                            <a href="" className=' m-1 nav-address'> <strong> Raj Mohalla </strong></a>
                            <p className='p-1'>Indore, Madhya Pradesh 452003</p>
                            <span><RiArrowDownSLine size='30px' color='orange'/></span>
                        </div>
                    </div>

                    <div className='nav-inner-div2 mt-4 flex'  >
                        <div className='nav-menu-div flex'>
                            <span><FiSearch className='nav-icon ' fontSize='20px'/> </span> <a className='nav-option '>Search</a>
                        </div>
                        <div className='nav-menu-div flex'>
                            <span><MdPolymer className='nav-icon ' fontSize='20px'/></span> <a className='nav-option'>Offers</a>
                        </div>
                        <div className='nav-menu-div flex'>
                            <span><IoIosHelpBuoy className='nav-icon ' fontSize='20px'/></span> <a className='nav-option'>Help</a>
                        </div>
                        <div className='nav-menu-div flex'>
                            <span><FiUser className='nav-icon ' fontSize='20px'/></span> <a className='nav-option'>Sign In</a>
                        </div>
                        <div className='nav-menu-div flex'>
                            <span><IoCartOutline className='nav-icon ' fontSize='20px'/></span> <a className='nav-option'>Cart</a>
                        </div>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default nav