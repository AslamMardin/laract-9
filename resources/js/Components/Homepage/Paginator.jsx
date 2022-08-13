import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const Paginator = ({meta}) => {
   const prev = meta.links[0].url
   const next = meta.links[meta.links.length -1].url
   const current = meta.current_page
  return (
    <div className="btn-group">
        {prev && <Link href={prev} as="button" className="btn">«</Link>}
        <Link  className="btn">Page {current}</Link>
        {next && <Link href={next} as="button" className="btn">»</Link>}
    </div>
  )
}

export default Paginator