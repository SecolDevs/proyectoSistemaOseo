import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Video from './components/Video'
import Informacion from './components/Informacion'
import Inicio from './routes/Inicio'
import Info from './routes/Info'
import Juegos from './routes/Juegos'
import Videos from './routes/Videos'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/video/:id">
          <Video />
        </Route>
        <Route path="/informacion/:id">
          <Informacion />
        </Route>
        <Route path="/juegos">
          <Juegos />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
