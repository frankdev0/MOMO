import React from 'react';

const YoutubeVideo = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100vh', // Full viewport height
        width: '100vw' // Full viewport width
    }}>
        <iframe
            src="https://www.youtube.com/embed/W1xTBn9bTwY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
                width: '1040px', // Specific width
                height: '450px', // Specific height
                border: '0' // No border
            }}
        ></iframe>
    </div>
    
    
  );
};

export default YoutubeVideo;
