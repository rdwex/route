import React from 'react'
// import { IconName } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";


export default function Footers() {
    return (
        <>
            <footer className="navbg site-footer pt-5">
                <div className="container p-5">
                    <div className="row d-flex align-content-center justify-content-around">
                        <div className="col-md-4 text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p className='mt-1'>Clark, MO 65243</p>

                        </div>
                        <div className="col-md-4 text-center">
                            <h3 className=''>AROUND THE WEB</h3>
                            <div className="social-links">
                                <a className='mx-1 text-light fs-3' href="#"><FaFacebook /></a>
                                <a className='mx-1 text-light fs-3' href="#"><FaLinkedin /></a>
                                <a className='mx-1 text-light fs-3' href="#"><FaGooglePlus /></a>
                                <a className='mx-1 text-light fs-3' href="#"><FaSpotify /></a>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>


                </div>
                <div className="text-center p-3 bg2">
                    <p>Copyright © Your Website 2021</p>
                </div>
            </footer>

        </>
    )
}
