import React from 'react';

function BasicButtons() {
  const buttonStyle = {
    marginRight: '10px',
    border: 'none',
    borderRadius: '6px',
    background: 'linear-gradient(to right, blue, blue)',
    border:'3px solid #402eb3',
    color: 'white',
    fontSize: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s', // Removed border-color transition
    fontStyle:'Roman',
    fontWeight: '500'
    
  };



  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button 
        style={buttonStyle} 
        onMouseEnter={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = 'blue';
            
        }}
        onMouseLeave={(e) => {
          e.target.style.background = buttonStyle.background;
          e.target.style.color = buttonStyle.color;
        
        }}
      >
        Preview
      </button>
      <button 
        style={buttonStyle} 
        onMouseEnter={(e) => {
          e.target.style.background = 'white';
            e.target.style.color = 'blue';
            
        
        }}
        onMouseLeave={(e) => {
          e.target.style.background = buttonStyle.background;
          e.target.style.color = buttonStyle.color;
        
        }}
      >
        Create Course
      </button>
    </div>
  );
}

export default BasicButtons;
