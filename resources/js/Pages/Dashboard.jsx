import React, {useState, useEffect} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    
    const handleButtonSubmit = (e) => {
        e.preventDefault()
        const data = {
            title, description,category
        }
        Inertia.post('/homepage', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }
    
    useEffect(() => {
        if(!props.myNews){
            Inertia.get('/homepage/show')
        }
       return
    }, []);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            {props.flash.message && <div className="alert alert-success shadow-lg"><div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{props.flash.message}!</span>
                            </div>
                            </div>}
                            
                            <input type="text" placeholder="Judul" name="title" className="input input-bordered w-full mt-2" onChange={(e) => setTitle(e.target.value) } value={title} />
                            <input type="text" placeholder="Deskripsi" name="description" className="input input-bordered w-full mt-2" onChange={(e) => setDescription(e.target.value)} value={description} />
                            <input type="text" placeholder="Kategori" name="category" className="input input-bordered w-full mt-2" onChange={(e) => setCategory(e.target.value)} value={category} />
                            <button method="" className="btn btn-primary m-2" onClick={handleButtonSubmit}>Tambah</button>
                        </div>
                    </div>
                </div>
                
            </div>

           {props.myNews ? props.myNews.map((data,i) => {
            return <div className="card w-96 bg-base-100 shadow-xl mt-5" key={data.id}>
               <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{data.category}</div> 
                </div>
                </div>
                </div>
           }) : <p>Data Belum ada</p>}
        </Authenticated>
    );
}
