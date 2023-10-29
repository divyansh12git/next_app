import React from 'react'
import getAllUser from '@/lib/getallUser'
import Link from 'next/link';
import  {Metadata} from "next"; 

export const metadata:Metadata={
  title:'Users',
  description:'Seach the blog specific to the particular user'
}




export default async function Blog() {
   
  const userData:Promise<User[]> = getAllUser();
  const users=await userData;
  
    const content=(
        <>
          {users.map(
            (elem)=>{
              
                return(
                    <>
                <p >
                    <Link href={`/blog/${elem.id}`}>{elem.name}</Link>
                </p>
                <br />
                </>
                )
            }
          )}
        </>
    )
    return (
        
    content
  )
}
