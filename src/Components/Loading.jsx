import React from 'react'

const Loading = () => {
  return (
    <div className='p-6 max-h-full h-60 w-full flex items-center justify-center'>
        <div className="rounded-full border-4 p-6 border-t-amber-400 border-l-blue-400 border-b-emerald-400 border-r-cyan-400 animate-spin"></div>
    </div>
  )
}

export default Loading