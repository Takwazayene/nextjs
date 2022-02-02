import React,{useState} from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { fetcher } from './index'

export default function IndividualUser ({id}) {

    const {data,error} = useSWR(
       id ? `https://jsonplaceholder.typicode.com/posts/${id}/comments` : null,
        fetcher
    )
    if(error) {
        <p>{error.message}</p>
    }

    if (!data)
{
    <p>Loading...</p>
}

    return  <pre>{JSON.stringify(data,null,2)}

      </pre>
}

