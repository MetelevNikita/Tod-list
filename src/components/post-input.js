import './post-input.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'


// components

import Mybutton from './UI/Mybutton'
import { CreatePostReducer } from '../store/poersonReducer'

//





const Postinput = () => {

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [phone, setPhone] = useState('')

  const postSelector = useSelector(state => state.post.post)
  const dispatch = useDispatch()

const createPost = () => {

  const createPost = {
    name: name,
    title: title,
    phone: phone
  }

  dispatch(CreatePostReducer(createPost))
  console.log(createPost)
  console.log(postSelector)
}



  return(
    <div className="post-input-container">
      <div className="post-input-box">

        <h2 className="inputs-title">Внеси данные</h2>

        <div className="input-box">
          <div className="input-title">Введите имя</div>
          <input className="input-text" type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
          <hr  className='input-line'/>
        </div>

        <div className="input-box">
          <div className="input-title">Введите заголовок</div>
          <input className="input-text" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
          <hr  className='input-line'/>
        </div>

        <div className="input-box">
          <div className="input-title">Введите телефон</div>
          <input className="input-text" type="tel" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
          <hr  className='input-line'/>
        </div>

        <Mybutton style={{marginTop: 20 + 'px'}} onClick={() => {createPost()}}>создать</Mybutton>

      </div>
    </div>
  )
}

export default Postinput