import React,{useState} from 'react'
import userSWR from 'swr'
import axios from 'axios'
import IndividualUser from './IndividualUser'


export const fetcher = (url) => axios.get(url).then(response=>response.data)

export default function UsersComponent() {
    const [id,setId] = useState(null);
    const {data,error} = userSWR('https://jsonplaceholder.typicode.com/posts',fetcher)

    if(error) {
        <p>{error.message}</p>
    }
    if (!data)
{
    <p>Loading...</p>
}

    return (
        <div>
            <h1>Posts</h1>
     {data?.map(post => (
         <p key ={post.id} onClick={()=>setId(post.id)}>{post.title}</p>
     ))}
 <IndividualUser id={id}></IndividualUser>

        </div>
    )
}