import React, { useEffect, useState } from 'react'

const Fetching = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then(data=> setData(data));
    }, [])

  return (
    <div>
        {data.map(item=> (
            <p key={item.id}>{item.title}</p>
        ))}
    </div>
  )
}

export default Fetching