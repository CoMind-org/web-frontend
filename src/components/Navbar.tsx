import { Link } from 'react-router-dom'
import { ChevronRight } from "lucide-react"

export default function Navbar() {
  return (
    <div className=''>
        <nav className='bg-[#020031] ml-64 h-16 flex items-center px-4 text-zinc-400'>
            <div className='w-[50%] flex items-center gap-3'>
                <p>Project name</p>
                <ChevronRight size={20} />
                <p>Project name</p>
            </div>

            <div className='w-[50%] pr-10 mx-auto flex justify-end gap-10'>
                <Link className='hover:text-white' to="/">Home</Link>
                <Link className='hover:text-white' to="/">Home</Link>
                <Link className='hover:text-white' to="/">Home</Link>
            </div>
        </nav>
    </div>
  )
}
