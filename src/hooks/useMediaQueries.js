import { useEffect, useState } from 'react'
// For Mobile devices: 320px-480px
// For Tablets or iPad: 480px - 768px
// For Laptop or small-size screen: 768px -1024px
// For Desktop or large-size screen: 1024px -1200px
// For Extra-large size device: 1200px and more

export const customMediaQueries = {
  mobile: '@media (min-width: 320px) and (max-width: 481px)',
  tablet: '@media (min-width: 482px) and (max-width: 768px)',
  smallLaptop: '@media (min-width: 769px) and (max-width: 1024px)',
  laptop: '@media (min-width: 1025px) and (max-width: 1200px)',
  largeScreen: '@media (min-width: 1200px)',
}

const deviceType = (size, device) => {
  switch (true) {
    case size > 320 && size <= 480 && device === 'mobile':
      return true
    case size > 480 && size <= 768 && device === 'tablet': // tablet
      return true
    case size > 768 && size <= 1024 && device === 'laptop':
      return true
    case size > 1024 && size <= 1200 && device === 'desktop':
      return true
    case size > 1200 && device === 'largeScreen':
      return true

    default:
      return null
  }
}

function useMediaQueries(device) {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    // height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.screen.width,
        // height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  let deviceSize = deviceType(windowSize.width, device)
  return deviceSize
}

export default useMediaQueries
