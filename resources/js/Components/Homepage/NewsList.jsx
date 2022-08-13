import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react';

const isNews = (news) => {
  return news.map((data, i) => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl m-4" key={data.id}>
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{data.category}</div> 
            <div className="badge badge-outline">{data.author}</div>
          </div>
        </div>
      </div>
    )
  })
}

const noNews = () => {
  return (
    <h1>Data Tidak ada</h1>
  )
}

const NewsList = ({news}) => {
  return news.length < 0 ? noNews : isNews(news)
}
export default NewsList