import React from 'react'
// import reactLogo from './assets/react.svg'
import Home from './Components/Home'


function App() {

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="header text-center mb-10">
        <h1 className='text-2xl font-semibold text-gray-600'>AI Image Enhancer</h1>
        <p>Turn your blurry image to high quality image</p>
      </div>

      <Home />

      <div className="footer mt-4">
        <p className='text-xs'>Powered by React SuppressionHyderationError</p>
      </div>

    </div>
  )
}

export default App
