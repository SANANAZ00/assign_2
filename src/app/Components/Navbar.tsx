import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <div className="flex justify-between items-centre p-2 text-white font-bold text 2xl bg-green-800">
      <Link className= "p-4" href="/">Home</Link>
      <Link className="p-4" href="/About">About</Link>
      <Link className="p-4" href="/Contact">Contact</Link>


    </div>
  )
}

export default Navbar



