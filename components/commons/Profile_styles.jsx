import React from 'react'

const Profile_Styles = ({ title, list }) => {
    return (
        <div className="border-white mt-4 lg:border-b border-opacity-20 pb-[20px] lg:mb-[40px]">
            <h1 className="text-[24px] font-medium lg:text-[30px] select-none" data-aos='zoom-in' data-aos-anchor-placement="bottom">{title}</h1>
            <div className="mt-[15px] grid gap-[20px] xl:gap-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {
                    list && list.map((style, inx) => {
                        return <div key={inx} className='aspect-auto' data-aos='zoom-in' data-aos-anchor-placement="bottom">
                            <p className='font-medium  text-[13px] md:text-[16px] text-white text-opacity-50 uppercase mb-[7px]'>{style.type}</p>
                            <p className='font-medium text-[18px] md:text-[20px] text-white text-opacity-80'>{style.value}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Profile_Styles