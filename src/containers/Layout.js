import React from 'react'
import {Header, Footer} from '../components'
function Layout({isAuth, children}) {
    return (
        <div>
            {!isAuth && <Header />}
            {children}
            <Footer/>
        </div>
    )
}
export default Layout
