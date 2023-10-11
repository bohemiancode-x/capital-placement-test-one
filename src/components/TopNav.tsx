import React from 'react';

const Styles: React.CSSProperties = {
    width: '100%',
    boxShadow: '0px 4px 23px 0px rgba(0, 0, 0, 0.05)',
    color: 'black',
    fontWeight: 500,
    // padding: '25px 0'
};

const spanStyle: React.CSSProperties = {
    padding: '25px 0px',
    background: '#00635B',
    color: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
}

const navStyle: React.CSSProperties = {
  width: '100%',
  padding: '25px 0px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}

const TopNav = () => {
  return (
    <div style={Styles}>
      <ul style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
        <li style={navStyle}>Program Details</li>
        <li style={spanStyle}>Application Form</li>
        <li style={navStyle}>Workflow</li>
        <li style={navStyle}>Preview</li>
      </ul>
    </div>
  )
}

export default TopNav