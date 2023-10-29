import React from 'react';
import getUser from '@/lib/getUser';
import getUserPost from '@/lib/getUserPost';
import {Suspense} from "react";
import UserPosts from '@/lib/components/post';
import { Metadata } from 'next';
type Params={
  params:{
    usersId:string,
  }
}

export async function generateMetadata({params:{usersId}}:Params):Promise<Metadata>{
  const userData:Promise<User>=getUser(usersId);
  const user=await userData;
  // console.log(user)
  return{
    title:`${user[0].name}`,
    description:`this is the page belongs to ${user[0].name}`
  }
}



export default async function page({params}:Params) {
  const userData:Promise<User>=getUser(params.usersId);
  const userPostsData:Promise<Posts[]>=getUserPost(params.usersId);
  const [user,userPosts]=await Promise.all([userData,getUserPost]);
  // console.log(params.usersId);
  


  return (
    <>
    
    <h2>{user.username}</h2>
    <br />
  
    <Suspense fallback={<h2>Loading ....</h2>}>
      <UserPosts promise={userPostsData} />
  </Suspense>
    </>
  )
}

