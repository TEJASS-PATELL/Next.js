import React from 'react'
import "./Navigation.css"
import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="header">
        <div className="logo">
            MyLogo
        </div>

        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href='/home' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link href='/setting' className="nav-link">Setting</Link>
                </li>
                <li className="nav-item">
                    <Link href='/about' className="nav-link">About</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
