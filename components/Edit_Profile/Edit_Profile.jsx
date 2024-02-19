"use client"
import { client_routes } from '@/lib/helpers'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import SideContent from './SideContent'
import { useForm } from 'react-hook-form'
import { BsPlus } from 'react-icons/bs'
import Image from 'next/image'
import { imgUpload } from '@/lib/actions'

const Edit_Profile = ({ user }) => {

    const [photos, setPhotos] = useState([])

    const { register, handleSubmit } = useForm()

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const photoHandler = async (e) => {
        let obj = {}
        const { files } = e.target
        if (files[0]) {
            let file = await getBase64(files[0])
            obj.name = files[0].name
            obj.photo_url = file
            setPhotos((prev) => [...prev, obj])
        }
    }

    const editHandler = (data) => {
        console.log(data)
    }

    return (
        <div className='w-full flex justify-center items-center flex-col p-3'>
            <div className='w-full text-white  mb-14 flex justify-between'>
                <Link href={client_routes.profile}> <MdArrowBack className='text-2xl cursor-pointer' /></Link>
                <p>Edit Profile</p>
            </div>
            <SideContent user={user} />
            <form onSubmit={handleSubmit(editHandler)} className='w-full text-white'>
                <div className='w-full pt-4 '>
                    <p className='text-2xl font-medium'>Photos</p>
                    <div className='grid grid-cols-3 gap-3 py-2 w-full'>
                        {
                            user?.photos && user.photos.map((photo, inx) => (
                                <div className='aspect-square bg-slate-200 rounded-lg' key={inx}></div>
                            ))
                        }
                        {
                            photos && photos.map((photo, inx) => (
                                <div className='aspect-square bg-transparent border-slate-200 border-dashed rounded-md border ' key={inx}>
                                    <Image src={photo.photo_url} width={1000} height={1000} alt='user' className='w-full h-full object-contain' />
                                </div>
                            ))
                        }
                        <div className='aspect-square border-slate-200 border-dashed rounded-md border flex items-center justify-center'>
                            <label htmlFor="upload" className='flex flex-col items-center gap-2'>
                                <BsPlus className='text-center text-2xl' />
                                <p className='text-xs'>Upload Image</p>
                            </label>
                            <input type="file"  {...register("photo")} className='hidden' id='upload' onChange={photoHandler} accept='.jpg,.png,.jpeg' />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Edit_Profile