import React from 'react'
import {Container,Logo,LogoutBtn} from "../index"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
const authStatus=useSelector((state)=>state.auth.status)
const navigate=useNavigate()
const navItems=[
  {
    name:"Home",
    slug:"/",
    active:true
  }
  ,{
    name:"login",
    slug:"/login",
    active:!authStatus,
  },{
    name:"SignUp",
    slug:"/signup",
    active:!authStatus
  },{
    name:"All Posts",
    slug:"/all-posts",
    active:authStatus
  },
  {
    name:"Add Post",
    slug:"/add-post",
    active:authStatus
  }
]
  return (
    <div className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to="/">
              <Logo  width='70px'/>
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Header