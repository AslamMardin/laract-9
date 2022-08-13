import React, {useState} from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar'
import { Inertia } from '@inertiajs/inertia';

function EditNews(props) {

    const [title, setTitle] = useState(props.myNews.title)
    const [description, setDescription] = useState(props.myNews.description)
    const [category, setCategory] = useState(props.myNews.category)

      const handleButtonSubmit = (e) => {
        e.preventDefault()
        const data = {
            id:props.myNews.id,
            title, description,category
        }
        Inertia.post('/homepage/update', data)
    }
    
  return (
   <>
    <Head title={props.title} />
    <Navbar user={props.auth.user} />

    <input type="text" placeholder="Judul" name="title" className="input input-bordered w-full mt-2" onChange={(e) => setTitle(e.target.value) } value={title} />
    <input type="text" placeholder="Deskripsi" name="description" className="input input-bordered w-full mt-2" onChange={(e) => setDescription(e.target.value)} value={description} />
    <input type="text" placeholder="Kategori" name="category" className="input input-bordered w-full mt-2" onChange={(e) => setCategory(e.target.value)} value={category} />
    <button method="" className="btn btn-primary m-2" onClick={handleButtonSubmit}>Edit</button>
   </>
  )
}

export default EditNews