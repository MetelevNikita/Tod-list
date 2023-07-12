import './post'

// components

import Post from './post'
import Emptylist from './emptyList'

//


import { useSelector } from 'react-redux/es/hooks/useSelector'

const Postlist = () => {

  const postSelector = useSelector(state => state.post.post)
  console.log(postSelector)



  return(
    <ul className="post-list-container">

      {(postSelector.length < 1) ? <Emptylist />: postSelector.map((item, index) => {return <Post key={index} name={item.name} title={item.title} phone={item.phone} date={JSON.stringify(item.date)}/>})}

    </ul>
  )
}

export default Postlist