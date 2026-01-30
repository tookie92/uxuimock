'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UserDetailContext } from '@/context/UserDetailContext'


function Provider({children}: any) {

    const [userDetail, setUserDetail] = useState<any>(null)
    useEffect(()=>{
        CreateNewUser()
    },[])

    const CreateNewUser=async()=>{
        const result = await axios.post('/api/user',{})
        setUserDetail(result?.data)
        console.log(result.data)
    }
  return (
    <UserDetailContext.Provider value={userDetail}>
      {children}
    </UserDetailContext.Provider>
  )
}

export default Provider