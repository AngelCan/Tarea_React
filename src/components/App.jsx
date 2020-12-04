import React from 'react'
import {Router} from '@reach/router'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import Tarea1 from '../pages/Tarea1.jsx'
import Tarea2 from '../pages/Tarea2.jsx'

const  App=() =>(
  <Layout>
    <Router>
      <Home path="/"/>
      <Tarea1 path="tarea1"/>
      <Tarea2 path="tarea2"/>
    </Router>
  </Layout>
)

export default App;
