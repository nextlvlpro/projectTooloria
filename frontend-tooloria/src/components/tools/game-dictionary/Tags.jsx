import React from 'react'

export default function Tags({ tags }) {
    return (
        <div className='flex flex-wrap gap-3'>
            {tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                    {tag} 
                </span>
            ))}
        </div>
    )
}
