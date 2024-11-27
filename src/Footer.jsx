import React from 'react';

const Footer = ({ images }) => {
  return (
    <footer
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#242424',
        textAlign: 'center',
      }}
    >
      <h2>Bonus Images</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '10px',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: '400', // Define consistent width
              height: '400px', // Define consistent height
              overflow: 'hidden', // Crop overflowing parts
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={image}
              alt={`Bonus Image ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain', // Preserve aspect ratio, fit within bounds
              }}
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
