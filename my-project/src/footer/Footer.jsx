import React from "react"
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-gray-200 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center text-2xl font-mono font-bold text-orange-500">
                            <h4>Jaiswal Medical Agency</h4>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Quick Links</h2>
                            <ul className="text-black-500 font-medium ">
                                <li className="mb-2">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact" className="hover:underline ">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact" className="hover:underline pt-15">
                                        Order
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-black-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Whatsapp
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Instagram
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                             Mohammad Iqbal
                        </a>
                        . All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>
    );
}
