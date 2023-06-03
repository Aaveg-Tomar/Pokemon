import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className=' flex justify-center'>
            <div className='shadow-xl p-20 m-20 w-1/2'>
                <div className=' flex flex-col justify-center '>
                    <img src='./images/pokemonLogo.svg' className=' block ml-auto mr-auto w-72' />
                    <img src='./images/homeImage.png' className=' block ml-auto mr-auto  w-96' />
                </div>
                <Link to='/main' >
                    <div className=' '>
                    <button className=" block ml-auto mr-auto  relative  items-center justify-center p-0.5 mb-2 h-10 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Let's go
                        </span>
                    </button>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Home