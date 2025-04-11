import React from 'react'

const UploadImage = ({uploadFileHandler}) => {

    let changesHandler = (e) =>{
        let file = e.target.files[0];
        uploadFileHandler(file)
    }

  return (
    <div className='bg-white p-10 rounded-2xl shadow-2xl '>

        <label htmlFor="fileUpload" className='cursor-pointer block border-dashed border-2 border-gray-300 text-center p-6 hover:border-blue-300 transitiom-all duration-300 '>
            <input type="file" name="img" id="fileUpload" className='hidden' onChange={(e) => changesHandler(e)} />
            <p className='font-medium text-lg text-gray-600'>Select or drag file here...</p>
        </label>
    </div>
  )
}

export default UploadImage