
"use client"
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import app from "../firebase/firebaseConfig";
import { useSession, signIn,signOut } from "next-auth/react"
import { getFirestore , doc, setDoc } from "firebase/firestore";
import { HiSearch,HiBell,HiChat } from "react-icons/hi";

import { useRouter } from 'next/navigation';
import {RiArrowDropDownLine} from "react-icons/ri";
function Header() {
    const[dropdown,setDropdown]=useState(false)
    const {data: session} = useSession();
    const router = useRouter();
    const db= getFirestore(app);

    const showDropdown=()=>{
        setDropdown(!dropdown)
    }
    useEffect(()=>{
        saveUserInfo()
    },[session])
    const saveUserInfo = async () => {
        if (session?.user){
            await setDoc(doc(db,'user',session?.user.email),{
                name:session?.user.name,
                email:session?.user.email,
                image:session?.user.image,
            })
        }
    }
    const onCreateClick=()=>{
        if(session)
        {
            router.push('/pinbuilder')
        }
        else{
            signIn()
        }
    }

    return (
        <div className='flex justify-between
     gap-3 md:gap-2 items-center p-6 '>
            <Image src='/logo.png' alt='logo'
                   width={60} height={60} onClick={() => router.push('/')}
                   className='hover:bg-gray-300 p-2
        rounded-full cursor-pointer'/>
            <button className='bg-black
         text-white p-3 px-6 rounded-full
         text-[25px]
          hidden md:block' onClick={() => router.push('/')}>Home
            </button>
            <button className='font-semibold p-3 px-6
         rounded-full text-[25px]'
                    onClick={() => onCreateClick()}>Create
            </button>
            <div className='bg-[#e9e9e9] p-3 px-6
         gap-3 items-center rounded-full w-full hidden md:flex'>
                <HiSearch className='text-[34px]
        text-gray-500'/>
                <input type="text" placeholder='Search'
                       className='bg-transparent outline-none w-full text-[25px]'/>

            </div>
            <HiSearch className='text-[25px]
        text-gray-500 md:hidden'/>
            <div >
                <HiBell className='text-[25px] md:text-[60px] text-gray-500 cursor-pointer'/>

            </div>
            <div >
                <HiChat className='text-[25px] md:text-[60px] text-gray-500 cursor-pointer'/>
            </div>
                {session?.user ?
                <Image src={session.user.image}
                       onClick={() => router.push('/'+session?.user.email)}
                       alt='user-image' width={60} height={60}
                       className='hover:bg-gray-300 p-2
        rounded-full cursor-pointer'/> :

                <button className='font-semibold p-2 px-4 rounded-full'
                        onClick={() => signIn()}>Login</button>}

            {
                session?.user &&
                (
                    <div>
                        <RiArrowDropDownLine onClick={showDropdown} className='text-[25px] md:text-[60px] text-gray-500 cursor-pointer'/>
                        {
                            dropdown && <div
                                className="absolute top-20 right-0 bg-white"
                            >
                                    <button className='bg-gray-200
                    p-2 px-3 font-semibold mt-5 rounded-full'
                                            onClick={()=>signOut()}>Logout</button>


                            </div>
                        }
                    </div>
                )
            }

        </div>
    )
}
export default Header