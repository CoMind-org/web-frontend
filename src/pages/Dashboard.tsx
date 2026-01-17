import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Button } from "@heroui/react"
import { Plus } from "lucide-react"
import ProjectCard from "../components/ProjectCard"

export default function Dashboard() {
  return (
    <div className="bg-[#020018] w-screen h-screen">
      <Navbar />
      <Sidebar />
      <div className='ml-64 p-10'>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">Projects</h1>
            <p className="text-[#ffffff59]">Manage your AI-generated backends</p>
          </div>

          <Button color="primary" className="flex items-center justify-between gap-2">
            <Plus size={18} />
            <p>New Project</p>
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap gap-10">
          <ProjectCard
            name="E-Commerce Core"
            description="Product catalog and cart service"
            lastActive="Last active 2 hours ago"
          />

          <ProjectCard
            name="E-Commerce Core"
            description="Product catalog and cart service"
            lastActive="Last active 2 hours ago"
          />

          <ProjectCard
            name="E-Commerce Core"
            description="Product catalog and cart service"
            lastActive="Last active 2 hours ago"
          />
        </div>
      </div>
    </div>
  )
}