'use client'  
import React, { useState, useEffect } from 'react';  
import { motion } from 'framer-motion';  

const ImageOverlay = () => {  
  const [currentImage, setCurrentImage] = useState(0);  
  const images = [  
    '/secret-1.jpg',  
    '/secret-2.jpg',  
    '/secret-3.png',  
  ];  

  const containerStyle = {  
    width: '100%',  
    height: '100%',  
    display: 'flex',  
    alignItems: 'center',  
    justifyContent: 'center',  
    position: 'absolute', // Changed to relative for proper stacking  
    overflow: 'hidden', // Ensure no overflow  
  };  

  // Manage image cycling via effect  
  useEffect(() => {  
    const intervalId = setInterval(() => {  
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);  
    }, 4000); // Change image every 4 seconds  

    return () => clearInterval(intervalId);  
  }, [images.length]);  

  return (  
    <div style={containerStyle}>  
      {images.map((image, index) => (  
        <motion.img  
          key={index}  
          src={image}  
          style={{  
            position: 'absolute',  
            width: '100%',  
            height: '100%',  
            objectFit: 'cover', // Ensure images cover their container  
          }}  
          initial={{ opacity: 0 }} // start off invisible  
          animate={{  
            opacity: index === currentImage ? 1 : 0, // Fade in/out based on current index  
            transition: { duration: 1.5 }, // Duration of the fade  
          }}  
        />  
      ))}  
    </div>  
  );  
};  

export default ImageOverlay;