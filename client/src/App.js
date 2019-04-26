import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const styles = {
    appDiv: {
      border: 'solid green 1px',
      margin: '5px'
    }
  }
  return (
    <div className="App" style={styles.appDiv}>
      
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
