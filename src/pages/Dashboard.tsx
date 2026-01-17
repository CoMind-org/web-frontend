import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
  
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className='ml-64 p-4'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
      </div>
    </div>
  )
}