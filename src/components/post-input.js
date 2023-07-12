import './post-input.css'

// components

import Mybutton from './UI/Mybutton'


const Postinput = () => {


  return(
    <div className="post-input-container">
      <div className="post-input-box">

        <h2 className="inputs-title">Внеси данные</h2>

        <div className="input-box">
          <div className="input-title">Введите имя</div>
          <input className="input-text" type="text" />
          <hr  className='input-line'/>
        </div>

        <div className="input-box">
          <div className="input-title">Введите заголовок</div>
          <input className="input-text" type="text" />
          <hr  className='input-line'/>
        </div>

        <div className="input-box">
          <div className="input-title">Введите телефон</div>
          <input className="input-text" type="phone" />
          <hr  className='input-line'/>
        </div>

        <Mybutton style={{marginTop: 20 + 'px'}}>создать</Mybutton>

      </div>
    </div>
  )
}

export default Postinput