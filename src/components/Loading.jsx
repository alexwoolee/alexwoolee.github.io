import React from 'react'
import { Html } from '@react-three/drei';

const Loading = () => {
  return (
    <>
      {/* Converst something non 3d into 3d for canvas */}
      <Html>
        <div className='flex justify-center items-center'>
          {/* Spinner */}
          <div className='w-20 h-20 border-2 border-opacity-20 border-blue-600 border-t-blue-600 rounded-full animate-spin'></div>
        </div>
      </Html>
    </>
  )
}

export default Loading
