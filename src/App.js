import './App.css'
import { Provider } from 'react-redux'

// components

import Postinput from './components/post-input'
import { postStore } from './store/store'

const App = () => {


  return (
    <Provider store={postStore}>

        <div className="App">

            <h1 className='title'>TODO LIST</h1>

            <Postinput />

        </div>

    </Provider>

  )
}

export default App