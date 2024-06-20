import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "sticky",
    top: "90vh",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light mt-4 py-3" style={footerStyle}>
      <p className='text-center'>Copyright &copy; Anjali Prasad 2024</p>
    </footer>
  )
}
