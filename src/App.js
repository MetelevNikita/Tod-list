import './App.css'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'

// components

import Postinput from './components/post-input'
import { postStore } from './store/store'
import Postlist from './components/post-list'

const App = () => {




  return (
    <Provider store={postStore}>
        <div className="App">
            <h1 className='title'>TODO LIST</h1>

            <Postinput />
            <Postlist />

        </div>
    </Provider>

  )
}

export default App