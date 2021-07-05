import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './html/css/style.css'


function App() {
  return (
    <Root>
      <Header />
        <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
        </React.Suspense>
      <Footer />
    </Root>
  )
}

export default App
