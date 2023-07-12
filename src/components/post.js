import { DeletePostReducer } from '../store/poersonReducer'
import './post.css'

// components

import Mybutton from './UI/Mybutton'

//

import { useSelector, useDispatch } from 'react-redux'




const Post = (props) => {

  const dispatch = useDispatch()

  const deletePost = (post) => {
    dispatch(DeletePostReducer(post))
  }



  return(
    <li className="post-conainer">
      <div className="post-box">

        <div className="post-name">{`Имя: ${props.name}`}</div>
        <div className="post-title">{`Заголовок: ${props.title}`}</div>
        <div className="post-phone">{`Телефон: ${props.phone}`}</div>

        <hr className="post-line"/>

        <div className="post-date">{`Дата создания: ${props.date}`}</div>

        <Mybutton style={{marginTop: 20 + 'px'}} onClick={() => {deletePost(props.name)}}>Удалить</Mybutton>

      </div>
    </li>
  )
}


export default Post