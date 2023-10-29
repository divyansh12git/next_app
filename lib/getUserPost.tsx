export default async function(userid:String){
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
    if(!response.ok){
        throw new Error ("failed to fetch");

    }
    return response.json();
}