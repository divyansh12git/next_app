export default async function(userId:string){
    const res=await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    if(!res.ok){
        throw new Error ('failed to fetch user');
    }
    const fi= await res.json();
    // console.log(fi)
    return fi
}