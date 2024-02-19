import React from 'react'
import Profile_Styles from '../commons/Profile_styles'

const Content = ({ user }) => {
    const profile = {
        photos: [""],
        appearance: [
            {
                type: "sex",
                value: "Male",
            },
            {
                type: "ethnicity",
                value: "ask me"
            },
            {
                type: "body structure",
                value: "ask me"
            },
            {
                type: "piercings",
                value: "ask me"
            },
            {
                value: 'ask me',
                type: "height (cm.)"
            },
            {
                type: "civil status",
                value: "ask me"
            },
            {
                type: "hair color",
                value: "ask me"
            },
            {
                type: "tattos",
                value: "ask me"
            },
            {
                value: "ask me",
                type: "weight (kg.)"
            }
        ],
        lifestyle: [
            {
                type: "education",
                value: "ask me",
            },
            {
                type: "smoking habits",
                value: "ask me"
            },
            {
                type: "employment",
                value: "ask me"
            },
            {
                type: "drinking habits",
                value: "ask me"
            }
        ]
    }
    return (
        <div className='w-full text-white pb-8'>
            <div className='w-full pt-4 '>
                <p className='text-2xl font-medium'>Photos</p>
                <div className='grid grid-cols-3 gap-3 py-2 w-full'>
                    {
                        user?.photos && user.photos.map((photo, inx) => (
                            <div className='aspect-square bg-slate-200 rounded-lg' key={inx}></div>
                        ))
                    }
                </div>
                {!user?.photos && <p className='text-gray-400 text-sm'>No Photos Uploaded</p>}
            </div>
            <Profile_Styles title={"Appearance"} list={profile.appearance} />
            <Profile_Styles title={"Lifestyle"} list={profile.lifestyle} />


        </div>
    )
}

export default Content