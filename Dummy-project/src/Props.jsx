import React from 'react'

const Props = ({ text1, name }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '400px',
          padding: '40px',
          textAlign: 'center',
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1 style={{color: "blue"}}>Props passing </h1>
        <h1
          style={{
            color: '#333',
            fontSize: '32px',
            marginBottom: '15px',
          }}
        >
          {name}
        </h1>

        <h2
          style={{
            color: '#667eea',
            fontSize: '20px',
            fontWeight: '500',
          }}
        >
          {text1}
        </h2>
      </div>
    </div>
  )
}

export default Props
