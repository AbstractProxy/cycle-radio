'use client'
import { useState, useEffect, useCallback } from 'react'
import SidebarButton from '../SidebarButton/SidebarButton'
import { useMediaQuery } from 'react-responsive'

export default function Sidebar({ showOnDesktop }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true)
  }, [])

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false)
  }, [])

  const openMobileSidebar = useCallback(() => {
    setIsMobileSidebarOpen(true)
  }, [])

  const closeMobileSidebar = useCallback(() => {
    setIsMobileSidebarOpen(false)
  }, [])

  // useEffect(() => {
  //    console.log('Is mobile sidebar open? ', isMobileSidebarOpen)
  // }, [isMobileSidebarOpen])
  //  console.log('Is sidebar open?', isSidebarOpen)

  if (!isClient) return null

  // console.log('Profile nav component is mounted')
  return showOnDesktop
    ? !isMobile && (
        <SidebarButton
          isSidebarOpen={isSidebarOpen}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
          isMobile={isMobile}
        />
      )
    : isMobile && (
        <SidebarButton
          isSidebarOpen={isMobileSidebarOpen}
          openSidebar={openMobileSidebar}
          closeSidebar={closeMobileSidebar}
          isMobile={isMobile}
        />
      )
}
