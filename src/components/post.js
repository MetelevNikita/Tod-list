import Mybutton from './UI/Mybutton'
import './post.css'

const Post = (props) => {


  return(
    <li className="post-conainer">
      <div className="post-box">

        <div className="post-name">{`Имя: ${props.name}`}</div>
        <div className="post-title">{`Заголовок: ${props.title}`}</div>
        <div className="post-phone">{`Телефон: ${props.phone}`}</div>

        <hr className="post-line"/>

        <div className="post-date">{`Дата создания: ${props.date}`}</div>

        <Mybutton style={{marginTop: 20 + 'px'}} onClick={() => {console.log('click')}}>Удалить</Mybutton>

      </div>
    </li>
  )
}


export default Post