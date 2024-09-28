import React, { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

const Landing = lazy(() => import('./Pages/Landing'))
const Header = lazy(() => import('./Components/Header'))
const Footer = lazy(() => import('./Components/Footer'))

function App() {



  return (


    <>


      <Suspense>

        <div className="position-sticky sticky-top z-5 w-100 header-shadow">

          <Header />

        </div>

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
