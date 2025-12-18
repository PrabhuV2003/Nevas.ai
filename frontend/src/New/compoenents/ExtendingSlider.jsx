import React, { useState } from 'react'

const ExtendingSlider = () => {
  const slides = Array.from({ length: 10 }, (_, i) => ({
    title: `Photo ${i + 1}`,
    image:
      'https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg',
  }))

  const [active, setActive] = useState(0)

  const handleKey = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') setActive(index)
    if (e.key === 'ArrowRight')
      setActive(prev => Math.min(prev + 1, slides.length - 1))
    if (e.key === 'ArrowLeft')
      setActive(prev => Math.max(prev - 1, 0))
  }

  return (
    <div className="w-full">

      {/* Mobile / Tablet */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className="min-w-[75%] h-[320px] snap-center rounded-lg overflow-hidden relative"
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              {s.title}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Expanding Slider */}
      <div className="hidden md:flex h-[420px] w-full items-stretch">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            onKeyDown={e => handleKey(e, i)}
            aria-pressed={active === i}
            className="relative overflow-hidden transition-[flex] duration-500 ease-in-out 
                       shadow-lg focus:outline-none flex items-end cursor-pointer mx-1"
            style={{
              flex: active === i ? 2.5 : 0.15,
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/30 transition-opacity" />
            <div
              className={`relative p-6 z-10 transition-all duration-300 ${
                active === i
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <h3 className="text-white text-2xl lg:text-3xl font-semibold">
                {s.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

    </div>
  )
}

export default ExtendingSlider
