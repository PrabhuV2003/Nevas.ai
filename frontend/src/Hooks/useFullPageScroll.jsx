import { useEffect, useRef } from 'react'

export default function useFullPageScroll() {
  const isScrolling = useRef(false)

  useEffect(() => {
    const handleWheel = e => {
      if (isScrolling.current) return

      isScrolling.current = true

      const direction = e.deltaY > 0 ? 1 : -1
      const viewportHeight = window.innerHeight
      const currentScroll = window.scrollY
      const newScroll = currentScroll + direction * viewportHeight

      window.scrollTo({
        top: newScroll,
        behavior: 'smooth',
      })

      setTimeout(() => {
        isScrolling.current = false
      }, 1000) // duration depends on scroll speed
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])
}
