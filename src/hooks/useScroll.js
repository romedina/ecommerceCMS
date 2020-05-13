import { useEffect } from 'react'

const useScroll = (admin) => {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width:700px)').matches
    if (isMobile || admin) {
      window.scrollTo(0, 0)
    } else {
      window.scrollTo(0, 64)
    }
  }, [])
}

export default useScroll
