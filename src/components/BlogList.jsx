import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';


export async function loader(){
   
   const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(x => x.json())
   const users = await fetch('https://jsonplaceholder.typicode.com/users').then(x => x.json())

   return {posts, users}
}


export default function BlogList() {
    const {posts, users } = useLoaderData();


    // console.log(posts);
    // console.log(users);
    // const [blogList, setBlogList] = useState([]);
    // const [users, setUsers] = useState([]);
     
    // const user = users.find(x => x.Id == blogList.userId);
    
    // useEffect(() => {

    //     fetch('https://jsonplaceholder.typicode.com/posts').then(x => x.json()).then(x =>
    //         setBlogList(x.splice(0, 10)));
    //     fetch('https://jsonplaceholder.typicode.com/users').then(x => x.json()).then(x => setUsers(x));
    // }, [])



    return (
        <>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            {posts.map(x => (
                                <div className="post-preview" key={x.id}>
                                    <Link to={`/detay/${x.id}`}><h2 className="post-title">{x.title}</h2></Link>

                                    <p className="post-meta">
                                        Posted by 
                                        <a href="#!"> {users.find(user => user.id == x.userId).name} </a>
                                        on September 24, 2023
                                    </p>
                                    <hr className="my-4" />
                                </div>
                                
                            ))}
                        </div>
                        
                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                </div>
            
            
        </>
    )
}
