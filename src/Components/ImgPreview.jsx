import React from 'react'
import Loading from './Loading';

const ImgPreview = ({loading, enhanced, uploaded}) => {
    console.log(loading);
    
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2  max-w-4xl gap-2.5'>
        {/* Original Image */}
        <div className='bg-white rounded-xl shadow-lg  p-2'>
            <h2 className='text-xl font-semibold text-center bg-gray-800 text-white p-2 rounded-lg'>Original Image</h2>
            {
                uploaded ?
                <img src={uploaded} alt="" className='max-h-full w-full object-cover mt-2 h-60' />
                :
                <div className="flex items-center justify-center h-40 bg-gray-300">
                    No Image Selected
                </div>
            }
        </div>
        

        {/* Enhanced Image */}
        <div className='bg-white rounded-xl shadow-lg overflow-hidden p-2'>
             <h2 className='text-xl font-semibold text-center bg-gray-800 text-white p-2 rounded-lg'>Enhanced Image</h2>
             {
                enhanced ?
                <img src={enhanced} alt="" className=' w-full object-cover mt-2 h-60' />
                :
                    uploaded ? <Loading/> :
                    <div className="flex items-center justify-center h-40 bg-gray-300">
                        No Image Selected
                    </div>
                
             }
        </div>

    </div>
  )
}

export default ImgPreview