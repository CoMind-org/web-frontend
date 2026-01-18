import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Button } from "@heroui/react"
import { Plus } from "lucide-react"
import ProjectCard from "../components/ProjectCard"

export default function Dashboard() {
  return (
    <div className="bg-[#020018] w-screen h-screen overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <div className='md:ml-64 p-10'>
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

          <div className="group w-90 h-55 bg-[#010022] rounded-lg border border-dashed border-blue-500/20 px-6 py-5 hover:border-blue-500/50 cursor-pointer transition-all duration-300 hover:-translate-y-1">
            <div className="h-full flex items-center justify-center font-medium text-gray-500 group-hover:text-blue-400">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-gray-500/30 p-4 rounded-full">
                  <Plus size={18} />
                </div>
                <p>Create New Backend</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}