import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Nav from './components/Nav'
import PageTitle from './components/PageTitle'
import Resources from './components/Resources'
import resources from '../resources'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
    <Nav/>
    </>
  )
}

export default App
