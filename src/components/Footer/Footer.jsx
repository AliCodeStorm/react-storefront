import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 mt-8">
                <p className="mb-4 text-sm text-center text-gray-600 sm:mb-0">
                    &copy; 2019-2022 <a href="https://flowbite.com/" className="hover:underline text-gray-800" target="_blank">Flowbite.com</a>. All rights reserved.
                </p>
                <div className="flex justify-center items-center space-x-1">
                    {/* Facebook */}
                    <a href="#" data-tooltip-target="tooltip-facebook" className="inline-flex justify-center p-2 text-black rounded-lg cursor-pointer hover:bg-gray-100">
                        <i className="fab fa-facebook-f w-4 h-4"></i>
                        <span className="sr-only">Facebook</span>
                    </a>
                    <div id="tooltip-facebook" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                        Like us on Facebook
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    {/* Twitter/X */}
                    <a href="#" data-tooltip-target="tooltip-twitter" className="inline-flex justify-center p-2 text-black rounded-lg cursor-pointer hover:bg-gray-100">
                        <i className="fa-brands fa-square-twitter"></i>
                        <span className="sr-only">Twitter</span>
                    </a>
                    <div id="tooltip-twitter" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                        Follow us on Twitter
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    {/* GitHub */}
                    <a href="#" data-tooltip-target="tooltip-github" className="inline-flex justify-center p-2 text-black rounded-lg cursor-pointer hover:bg-gray-100">
                        <i className="fab fa-github w-4 h-4"></i>
                        <span className="sr-only">GitHub</span>
                    </a>
                    <div id="tooltip-github" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                        Star us on GitHub
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    <a href="#" data-tooltip-target="tooltip-dribbble" className="inline-flex justify-center p-2 text-black rounded-lg cursor-pointer hover:bg-gray-100">
                        <i className="fab fa-dribbble w-4 h-4"></i>
                        <span className="sr-only">Dribbble</span>
                    </a>
                    <div id="tooltip-dribbble" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                        Follow us on Dribbble
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
