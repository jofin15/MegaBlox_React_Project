import React, { useEffect, useState } from 'react'
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router-dom'
import PostCard from '../PostCard'
import Container from '../Container/Container'


function AllPost() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{},[])
    appwriteService.getPost([/* queries*/]).then((posts)=>{
        if (posts){
            setPosts(posts.documents)
        }
    })
  return (  
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost