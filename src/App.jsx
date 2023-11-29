// import './App.css'
import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import Layout from './components/Layout'
import HomePage from './pages/HomePage/HomePage'

function App() {


  return (
    <Suspense fallback={<Loader />}>      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />          
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </Suspense>
    // <Suspense fallback={<Loader />}>      
    //   <Routes>
    //     <Route path="/" element={<Layout lang={lang} changeLanguage={changeLanguage}/>}>
    //       <Route index element={<HomePage lang={lang}/>} />          
    //       <Route path="*" element={<Navigate to="/" />}></Route>
    //     </Route>
    //   </Routes>
    // </Suspense> 
  )
}

export default App
