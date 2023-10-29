import React from 'react'


export default async function UserPosts ({promise}:Props){
        const posts=await promise;
        const content=posts.map((elem,i)=>{
            // console.log(elem);
            return(
              <article >
                <h1>{i+1}</h1>
                <h2>{elem.title}</h2>
                
                <p>{elem.body}</p>
                <br />
              </article>
            )
        });
        return content;
      }
