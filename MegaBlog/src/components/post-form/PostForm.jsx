import React from 'react'
import {useForm} from "react-hook-form"
import RTE from "../RTE"
import {Button,Select,Input} from "../index"
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function PostForm() {
    const navigate=useNavigate()
    const selector=useSelector()
    const userData=useSelector(state=>state.user.userData)
    const {register,handleSubmit,watch,setValue,control,getValues } =useForm({
        defaultValues:{
            title:post?.title||"",
            slug:post?.slug||"",
            content:post?.content||"",
            status:post?.status||"active"
        }
    })
  return (
    <div>PostForm</div>
  )
}

export default PostForm