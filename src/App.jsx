import React, { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

const Landing = lazy(() => import('./Pages/Landing'))
const Header = lazy(() => import('./Components/Header'))
const Footer = lazy(() => import('./Components/Footer'))

function App() {


  return (


    <>


      <Suspense>

        <Header />


      </Suspense>



      <Suspense>

        <Routes>


          <Route path="/" element={<Landing />} />


        </Routes>


      </Suspense>



      <Suspense>

        <Footer />

      </Suspense>


    </>




  )
}

export default App
