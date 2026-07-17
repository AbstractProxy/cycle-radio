import { motion } from 'framer-motion'

export default function SidebarMotion({ isOpen, children, isDesktopSidebar }) {
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '100%', opacity: 0 },
  }

  return (
    <motion.div
      className={`fixed right-0 top-0 z-40 h-full ${
        isDesktopSidebar ? 'w-64' : 'w-full'
      }  bg-gray-800 text-white`}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
