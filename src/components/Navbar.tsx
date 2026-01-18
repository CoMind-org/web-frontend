import { ChevronRight } from "lucide-react"
import { User } from "@heroui/user";

export default function Navbar() {
    return (
        <div className=''>
            <nav className='bg-[#010022] pl-18 md:ml-64 h-16 flex items-center md:px-4 text-zinc-400 border-b border-blue-500/10'>
                <div className='w-[50%] flex items-center gap-3'>
                    <p>Dashboard</p>
                    <ChevronRight size={20} />
                    <p className="text-white">Project name</p>
                    
                </div>

                <div className='w-[50%] pr-2 md:pr-10 mx-auto flex justify-end gap-10'>
                    <User className='text-white'
                        avatarProps={{
                            src: "https://avatars.githubusercontent.com/u/81586965?v=4",
                        }}
                        description="Pro Plan"
                        name="Dasun Thathsara"
                    />
                </div>
            </nav>
        </div>
    )
}
