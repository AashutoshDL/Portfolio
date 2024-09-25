import './App.css'
import Contacts from './components/Contacts/Contacts'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  )}

export default App
