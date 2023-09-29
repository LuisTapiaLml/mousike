import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="principal-header">
            <Link className="logo" to="/">
                Mousike
            </Link>
            {/* <Link to="/Profile" >Log In</Link> */}
        </header>
    )
}
