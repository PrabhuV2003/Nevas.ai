import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NevasAI from './Nevas-ai/NevasAi'
import Web from './Nevi/Web'
import New from './New/App'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NevasAI />} />
        <Route path='/nevi' element={<Web />} />
        <Route path='/new' element={<New />} />
      </Routes>
    </div>
  )
}

export default App