import React, { useEffect, useState } from 'react'

function UseEffects( ) {

    const [width, setWidth] = useState(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)

    useEffect(() =>{
        window.addEventListener("resize", handleResize)
    },[])
    return(
        <>
        {width}
        </>
    )
    
//     const [resource, setResource] = useState('');
//     const [item, setItem] = useState([]);

//     useEffect(() =>{
//     fetch(`https://jsonplaceholder.typicode.com/${resource}`)
//       .then(response => response.json())
//       .then(json => setItem(json))
//     }, [resource]);
    
//   return (
//     <>
//         <div>
//             <button onClick={() => setResource('Post')}>Post</button>
//             <button onClick={() => setResource('User')}>User</button>
//             <button onClick={() => setResource('Comments')}>Comments</button>
//         </div>
//         <h1>{resource}</h1>
//         {item.map(ele => <pre>{JSON.stringify(ele)}</pre>)}
//     </>
//   )
}

export default UseEffects
