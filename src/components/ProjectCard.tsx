import { Server, ArrowRight } from "lucide-react"

type ProjectCardProps = {
  name: string
  description: string
  lastActive: string
}

export default function ProjectCard({ name, description, lastActive }: ProjectCardProps) {
    return (
        <div className="group w-90 h-55 bg-[#010022] rounded-lg border border-blue-500/10 px-6 py-5 hover:border-blue-500/20 cursor-pointer transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center">
                <div className="p-2 bg-blue-500/20 rounded-xl text-blue-300">
                    <Server size={25} />
                </div>
                <div className="text-success border border-success rounded-full bg-success/30 text-[12px] px-2">Completed</div>
            </div>

            <div className="mt-5">
                <p className="text-white font-medium text-2xl mt-4">{name}</p>
                <p className="text-[#ffffff59] text-sm mt-2">{description}</p>
            </div>

            <div className="mt-5 border-t border-blue-500/10 pt-4 flex justify-between text-xs text-[#ffffff59]">
                <p>Last active {lastActive}</p>
                <p className="transition-colors group-hover:text-blue-400">
                    Open Project{" "}
                    <ArrowRight size={12} className="inline transition-colors group-hover:text-blue-400" />
                </p>
            </div>
        </div>
    )
}
