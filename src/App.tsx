import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import Index from './pages-1/index'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}

export default App
