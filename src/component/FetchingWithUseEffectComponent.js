import React, { useState, useEffect } from 'react'
import axios from 'axios';

function FetchingWithUseEffectComponent() {
    const [posts, setPosts] =  useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            setPosts(res.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }, []);

    return (
        <div>
              {posts.map(result=>(
                  <li key={result.id}>{result.title}</li>
              ))}
        </div>
    )
}

export default FetchingWithUseEffectComponent
