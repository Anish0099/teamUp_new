import {ModeToggle} from "@/components/ui/toggle-mode";
import React from "react";
import page from "@/app/page";

const Nav = () => {
    return(
        <header className='flex justify-between items-center px-0 py-[10px]'>
            <div className="w-[139px] h-[37px]"><img src="/logo.png" /></div>
            <nav>
                <ul className='flex justify-center items-center gap-3 list-none'>
                    <li className='mr-[10px]'><ModeToggle/></li>
                    <li className='mr-[10px] text-[17px]'>About Us</li>
                    <li className='mr-[10px] text-[17px]'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;