

import { NavLink } from 'react-router-dom'

export default function Header() {

    return (

        <>
            <header className='container-fluid bg-black text-white rounded-full p-3u mt-10u'>
                <nav>
                    <ul className='flex font-body-base-light gap-2u'>
                        <NavLink className="px-4u py-3u rounded-full border-2 border-transparent hover:border-white transition-all" to="/"><li>Homepage</li></NavLink>
                        <NavLink className="px-4u py-3u rounded-full border-2 border-transparent hover:border-white transition-all" to="/about-us"><li>About Us</li></NavLink>
                        <NavLink className="px-4u py-3u rounded-full border-2 border-transparent hover:border-white transition-all" to="/posts"><li>Posts</li></NavLink>
                    </ul>
                </nav>
            </header>
        </>

    );
};