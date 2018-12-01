import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../routers/home'
import Contact from '../routers/contact'

const Application = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </React.Fragment>
  </Router>
)

export default Application