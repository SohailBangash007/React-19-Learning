import React from 'react'

const Props = ({ name }) => {
  return (
    <div
      style={{
        width: '250px',
        padding: '25px',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
      }}
    >
      <hr />
    
      <h1 style={{ color: 'blue' }}>Props passing</h1>

      <h1
        style={{
          color: '#333',
          fontSize: '32px',
          marginBottom: '15px',
        }}
      >
        {name.name}
      </h1>

      <h2
        style={{
          color: '#667eea',
          fontSize: '20px',
          fontWeight: '500',
        }}
      >
        {name.Email}
      </h2>

      <p>{name.Address}</p>
    </div>
  )
}

export default Props
