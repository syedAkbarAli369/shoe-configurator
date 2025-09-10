
const Hero = () => {
  return (
    <div className='absolute top-18 bg-gradient-to-r from-black to-gray-900 text-white px-6 py-3 rounded-2xl shadow-lg border border-white/10 group overflow-hidden'>
      <span className='syne text-3xl font-extrabold tracing-tighter relative z-10 transition-colors duration-300 group-hover:text-black'>
        CUSTOMIZE IT
      </span>
      <span className='absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-600' />
    </div>

  )
}

export default Hero
