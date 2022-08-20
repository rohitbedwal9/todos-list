import React from 'react'

export const Footer = () => {
  const footerStyle={
    position:"relative",
    bottom:"0",
    width:"100%",
    height:"40px",
    padding:"1 0 1 0",
    margin:"0"
  }
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
    <p className="text-center py-1">
      Copyright &copy;bigeye.in
    </p>
    </footer>
  )
}