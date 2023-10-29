

export default async function getAllUser(){
    const res=await fetch("https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/users");
    const final=await res.json();
    // console.log(final);
    if(!res.ok){
        throw new Error("failed to fetch");
    }
    return final;
}