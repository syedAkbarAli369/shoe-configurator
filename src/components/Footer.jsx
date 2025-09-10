

import { Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white h-12 w-full absolute bottom-0 flex items-center justify-between px-4">
      <p className="text-xs">
        © {new Date().getFullYear()} Cheel Company Ltd. All rights reserved.
      </p>
      <div className="flex space-x-3">
        <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
        <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-500" />
        <Github className="w-4 h-4 cursor-pointer hover:text-gray-400" />
      </div>
    </footer>
  )
}

export default Footer