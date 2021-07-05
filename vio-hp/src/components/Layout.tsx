import React from 'react'
import '../html/css/style.css'
import Header from './Header'
import Footer from './Footer'
import { Root } from 'react-static'
import { Router } from '@reach/router'
import Profile from 'containers/Profile'

const Layout: React.FC=() => {
    return(
      <Root>
        <main>
          <Header />
          <Router>
            <Profile path="/profile"/>
          </Router>
        </main>
        <Footer />
      </Root>
    )
}

export default Layout