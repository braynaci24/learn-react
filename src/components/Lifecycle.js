import React, { useEffect, useState, useRef } from 'react'

function Test() {

  const [count, setCount] = useState(0);
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);


  useEffect(()=>{
    console.log('Component render oldu!')
  })

  useEffect(()=>{
    console.log('Component ilk yüklendiğinde çalışır!')
    let interval = setInterval(()=> console.log('interval çalıştı'), 1000)
    return () => {
      console.log('component destroye oldu!');
      clearInterval(interval);
    }
  }, [])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [postId])

  /*
  useEffect(()=> {
    console.log('Count değeri değişti!')
  },[count])
 */

  return (
    <div>
      <h3>{count}</h3>
      <p>{post && JSON.stringify(post)}</p>
      <button onClick={() => setCount(count => count + 1)}>Arttır</button>
      <button onClick={() => setCount(count => count - 1)}>Azalt</button>

      <button onClick={() => setPostId(postId => postId + 1)}>Sonraki Post</button>

    </div>
  )
}

export default Test