import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar'
import NewsList from '@/Components/Homepage/NewsList'

const Homepage = ({title, news}) => {
    return (
        <>
        <Head title={title} />
        <Navbar />
       <div className="flex justify-center flex-col items-center gap-4 p-4 lg:flex-row lg:flex-wrap lg:items-stretch" >
            <NewsList news={news.data} />
       </div>
        </>
    )
}

export default Homepage