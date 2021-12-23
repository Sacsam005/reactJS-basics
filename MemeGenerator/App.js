import React, { Component } from 'react'
import Header from './component/Header'
import Memegenerator from './component/Memegenerator'


export class App extends Component {

  render() {

    return (
      <>
        <div className="container text-center">
          <Header />
          <Memegenerator />

        </div>
      </>
    )
  }
}

export default App
