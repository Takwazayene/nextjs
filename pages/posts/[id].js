  // if we navigate to localhost:3000/blog/123...
 /*function BlogPost() {
    const router = useRouter()
    const { id } = router.query
  
    return <p>Post: {id}</p> // ...you'll see "Post: 123" */
  

 /*   import fetch from 'isomorphic-unfetch';
    import Link from 'next/link'
    import useRouter from 'next/router'
    import useSWR from 'swr'
*/
    /*
    function Home(props){
        console.warn("data",props)
        return <div>
            <h1>Fetch Data from APR</h1>
    
            {
                props.data.map(data=>())
            }
        </div>
    }
    
    Home.getInitialProps= async function() {
        const res = await Fetch("https://jsonplaceholder.typicode.com/todos")
    
        const data = await res.json()
    
        return {
            data
          //  title:data.title,
         //   id:data.id,
           // completed:`${data.completed}`
        }
    }
    
    export default Home;
    
    */
    
   /* function Home({ query: { id } }, res) {
    
     
       
        return <div>
            <h1>Fetch Data from API</h1>
    
    
    
    {
            <div>
    
                    <a>{props.data.title}</a>
    
            </div>
        
    }
    </div>
    
    
    
    }
    
    
    Home.getInitialProps=async function()
    {
       
       
 
        const res =await fetch ('https://jsonplaceholder.typicode.com/posts/'+id);
        const data = await res.json();
        return {
            data
        }
    }
    
    export default Home;


*/

import { useRouter } from 'next/router'
import useSWR from 'swr'
import React,{useState} from 'react'
import Comments from './Comments'

import axios from 'axios'


export const fetcher = (url) => axios.get(url).then(response=>response.data)

export default function Person() {
  const { query } = useRouter()
  const {data,error} = useSWR(
    query.id ? `https://jsonplaceholder.typicode.com/posts/${query.id}` : null,
     fetcher
 )
 const {data2,error2} = useSWR(
    query.id ? `https://jsonplaceholder.typicode.com/posts/${query.id}/comments` : null,
     fetcher
 )
  

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return ( 
      <div>
      <pre>{JSON.stringify(data,null,2)}
  {JSON.stringify(data2,null,2)}

  </pre>
  <Comments id={data.id}></Comments>

  </div>

  
  )

}