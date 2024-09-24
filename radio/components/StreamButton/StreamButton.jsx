import Link from 'next/link'
import React from 'react'

export default function StreamButton({ url, icon, label, data, index }) {
  return (
    <div className="flex items-center">
      <Link
        href={url}
        className="flex items-center text-xl font-bold text-pink-500 transition-transform duration-200 hover:scale-105 hover:text-pink-700 hover:shadow-lg"
      >
        {React.cloneElement(icon, {
          className:
            'mr-2 h-6 w-6 text-slate-200 transition-transform duration-200 hover:rotate-12',
        })}
        {label}
      </Link>
      {index !== data.length - 1 && (
        <span
          aria-hidden="true"
          className="ml-2 text-sm font-bold text-slate-400"
        >
          /
        </span>
      )}
    </div>
  )
}
//OK
