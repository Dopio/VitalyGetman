import React from 'react'

import './index.css'
import 'normalize.css/normalize.css'
import  './globalStyle/Global.css'

import { Layout } from './components/Layout/Layout'
import { MainContainer } from './containers/MainContainer'

const App = () => {
  return (
    <Layout>
      <MainContainer />
    </Layout>
  )
}

export default App
