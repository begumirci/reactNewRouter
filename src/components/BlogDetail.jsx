import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export async function loader({ params }) {

  const detail = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id).then(x => x.json());
  const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`).then(x => x.json());


  return { detail, comments }

}

export default function BlogDetail() {
  // const [blogDetail, setBlogDetail] = useState();
  const { detail, comments } = useLoaderData();

  // useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts/' + id).then(x => x.json()).then(x => setBlogDetail(x))
  // },[])

  return (

      
    <div>
      <Header title={detail.title} subtitle={detail.body} />
      
        
        <h2 className='comment-header'>Comments</h2>
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                      
              
              {
                comments.map(x => (
                 <div className="post-preview" key={x.id}> 
                    <h2 className="post-title">{x.name}</h2>
                    <h3 className="post-subtitle">{x.body}</h3>
                    <p className="post-meta">
                      Posted by 
                      <a href="#!"> {x.email} </a>
                      on September 24, 2023
                    </p>
                    <hr className="my-4" />
                  </div>
                  
                  
                ))
              }
            </div>
          </div>
        </div>
        <Footer />


      
    </div>)

}
