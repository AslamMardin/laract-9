import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar'
import NewsList from '@/Components/Homepage/NewsList'
import Paginator from '@/Components/Homepage/Paginator';
const Homepage = (props) => {
    console.log(props)
    return (
        <>
        <Head title={props.title} />
        <Navbar user={props.auth.user} />
       <div className="flex justify-center flex-col items-center gap-4 p-4 lg:flex-row lg:flex-wrap lg:items-stretch" >
            <NewsList news={props.news.data} />
       </div>
       <div className="mt-4 flex justify-center items-center">
        <Paginator meta={props.news.meta}  />
       </div>
        </>
    )
}

export default Homepage