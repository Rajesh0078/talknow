// CircularNavigation.js
"use client"
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { BiSolidHome } from 'react-icons/bi';
import { BsBell, BsChatHeart, BsSearchHeart } from 'react-icons/bs';
import { SlUser } from 'react-icons/sl';
import { RiCloseLine } from "react-icons/ri";

const CircularNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const toggleMenu = () => {
        if (isOpen) {
            setIsOpen(!isOpen);
        } else {
            setIsOpen(true)
        }
    };

    const handleStop = (event, data) => {
        const x = data.x;

        const snapThreshold = window.innerWidth / 2;
        setPosition({
            x: x < snapThreshold ? 0 : window.innerWidth - 60,
            y: data.y,
        });
    };

    return (
        <Draggable position={position} onStop={handleStop} bounds="parent"  >
            <div className="fixed bottom-2" >
                <div className="relative h-10 w-10 rounded-full flex z-10 justify-center items-center bg-rose-600 transition-left duration-300 ease-in-out">
                    <div className='absolute text-white text-2xl cursor-pointer' onClick={toggleMenu}>
                        {
                            !isOpen ?
                                <BiSolidHome /> : <RiCloseLine />
                        }
                    </div>
                </div>
                {
                    isOpen &&
                    <div className="absolute w-[200px] flex -top-[200%] -left-[250%] rounded-full space-x-2 h-[200px]">
                        {
                            position.x < 100 ?
                                <div className='relative w-full h-full '>
                                    <div className="h-10 w-10 bg-white rounded-full absolute top-[3px] right-[60px] flex items-center justify-center" >
                                        <BsSearchHeart className='text-xl text-rose-600' />
                                    </div>
                                    <div className="h-10 w-10 bg-white rounded-full absolute top-[45px] right-[9px] flex items-center justify-center" >
                                        <BsChatHeart className='text-xl text-rose-600' />
                                    </div>
                                    <div className="h-10 w-10 bg-white rounded-full absolute bottom-[45px] right-[9px] flex items-center justify-center" >
                                        <BsBell className='text-xl text-rose-600' />
                                    </div>
                                    <div className="h-10 w-10 bg-white rounded-full absolute bottom-[3px] right-[60px] flex items-center justify-center" >
                                        <SlUser className='text-xl text-rose-600' />
                                    </div>
                                </div> :
                                <div className='relative w-full h-full '>
                                    <div className="h-10 w-10 bg-white rounded-full absolute top-[3px] right-[60px] flex items-center justify-center" >
                                        <BsSearchHeart className='text-xl text-rose-600' />
                                    </div>
                                    <div className="h-10 w-10 bg-white rounded-full absolute top-[45px] left-[39px] flex items-center justify-center" >
                                        <BsChatHeart className='text-xl text-rose-600' />
                                    </div>
                                    <div className="h-10 w-10 bg-white rounded-full absolute bottom-[45px] left-[39px] flex items-center justify-center" >
                                        <BsBell className='text-xl text-rose-600' />
                                    </div>
                                    <div className="h-10 w-10 bg-white rounded-full absolute bottom-[3px] right-[60px] flex items-center justify-center" >
                                        <SlUser className='text-xl text-rose-600' />
                                    </div>
                                </div>
                        }
                    </div>
                }
            </div>
        </Draggable>
    );
};

export default CircularNavigation;
