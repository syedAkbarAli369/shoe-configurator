

import { Phone, StoreIcon, ToolCase } from 'lucide-react'
import { SiEagle } from 'react-icons/si'

const Header = () => {
  return (
    <div className='bg-black w-full -mt-3 h-12 top-3 absolute z-50 left-0 flex justify-between p-3 items-center'>
      <div className='text-white flex gap-2 items-center justify-center'>
        <SiEagle size={18} />
        <h2>Cheel Snickers</h2>
      </div>
      <div className='flex lg:gap-9 gap-3'>
        <div className='text-white flex gap-2 items-center justify-center'>
          <StoreIcon size={18} />
          <h2>Store</h2>
        </div>
        <div className='text-white flex gap-2 items-center justify-center'>
          <ToolCase size={21} />
          <h2>Customize</h2>
        </div>
        <div className='text-white flex gap-2 items-center justify-center'>
          <Phone size={21} />
          <h2>Help</h2>
        </div>
      </div>

    </div>
  )
}

export default Header