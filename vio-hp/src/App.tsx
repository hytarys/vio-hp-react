import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Header from 'components/Header'
import MenuSP from 'components/MenuSP'
import Footer from 'components/Footer'
import FooterSP from 'components/FooterSP'
import './html/css/style.css'


function App() {
  return (
    <Root>
      <Header />
      <MenuSP />
        <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
        </React.Suspense>
      <Footer />
      <FooterSP />
    </Root>
  )
}

export default App