import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className='w-64 h-screen absolute top-0 left-0 bg-[#010022] text-white border-r border-blue-500/10'>
      <div className="h-25 w-full flex items-center justify-center">
        <Link to="/">
          <img className="h-12 mt-5" src="./src/assets/logo.png" alt="" />
        </Link>
      </div>
    </div>
  )
}
