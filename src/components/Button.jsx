import { Camera } from 'lucide-react'

const Button = () => {
  return (
    <button
      className="
        absolute bottom-21
        px-6 py-2 
        rounded-xl 
        font-semibold 
        text-white 
        bg-black
        border border-white/20 
        shadow-md
        overflow-hidden
        transition-colors duration-300
        group cursor-pointer
      "
      onClick={() => {


        const link = document.createElement('a');
        link.setAttribute('download', 'canvas.png');
        link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'))
        link.click()
      }}
    >
      <span
        className="
          relative z-10 
          transition-colors duration-300 
          group-hover:text-black flex gap-2 justify-center 
        "
      >
        Download
        <Camera />
      </span>
      <span
        className="
          absolute inset-0 
          bg-white 
          translate-y-full 
          group-hover:translate-y-0 
          transition-transform duration-500
        "
      />
    </button>
  )
}

export default Button
