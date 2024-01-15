import React, { useEffect, useState, useRef } from 'react'
import { Fragment } from 'react';
import Test from './components/Lifecycle';
import { Input } from './ComponentsStyle';

import './index.css'
function App() {
  const [show, setShow] = useState(false),
        inputRef = useRef(),
        [postId, setPostId] = useState(),
        [post, setPost] = useState();


  const focusInput = () => {
    let postId = inputRef.current.value
    setPostId(postId)
  }


  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => setPost(data))
  }, [postId]);


  return (
    <Fragment>
      {JSON.stringify(post)}
      <button onClick={()=> setShow(show => !show)}>
        { show ? 'Gizle': 'Göster' }
      </button>
      {show && <Test />}
      <Input type='number' ref={inputRef}/>
      <button onClick={focusInput}>Girdiğim değerdeki idye sahip isteği at</button>
    </Fragment>
  );
}

export default App;
