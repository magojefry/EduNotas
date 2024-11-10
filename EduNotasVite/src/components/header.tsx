import React from 'react';

interface HeaderLProps {
     toggleNavVisibility: () => void; 
}

const HeaderL: React.FC<HeaderLProps> = ({ toggleNavVisibility }) =>{
    return (
        <header className="text-grey-600 body-font bg-yellow-500 relative">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" onClick={toggleNavVisibility}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-600 rounded-full" viewBox="0 0 24 24">

                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>

                    <span className="ml-3 text-xl">CAMPUS UNIMAYOR</span>
                </a>

                <button className="inline-flex items-center bg-yellow-600 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0 ">
                    INICIO SESIÓN
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                </button>
            </div>
        </header>

    )
}

export default HeaderL;