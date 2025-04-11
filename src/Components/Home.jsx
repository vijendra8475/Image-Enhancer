import React, { useState } from 'react'
import UploadImage from './UploadImage'
import ImgPreview from './ImgPreview'
import { imgEnhancer } from '../utils/ImgEnhancer'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhanced, setEnhanced] = useState(null);
    const [ loading, setLoading] = useState(false);

    let uploadFileHandler = async(file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);

        // call API to enhance the Image
        try {
            // code which may throw an error
            let enhancedURL = await imgEnhancer(file);
            setEnhanced(enhancedURL);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
        
    }

  return (
    <>
        <UploadImage uploadFileHandler={uploadFileHandler} />
        <ImgPreview loading={loading} enhanced={enhanced} uploaded={uploadImage} />
    </>
  )
}

export default Home