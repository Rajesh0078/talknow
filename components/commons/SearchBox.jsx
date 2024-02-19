import React from 'react'

const SearchBox = ({ register, placeholder, setValue }) => {
    return (
        <div>
            <input type="text" {...register("search")} placeholder={placeholder} onChange={(e) => setValue("search", e.target.value)} className='outline-none w-full bg-slate-300 text-slate-100 bg-opacity-30 h-[42px] rounded-full px-4 placeholder:text-slate-300' />
        </div>
    )
}

export default SearchBox