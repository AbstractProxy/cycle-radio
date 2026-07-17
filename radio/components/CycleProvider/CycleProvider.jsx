'use client'

/* eslint-disable */

import Loading from '../Loading/Loading'
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react'
import { getCycle } from '@/utils/mode_check/mode_check'

const CycleContext = createContext()

function getNextCycleTimeout() {
  const now = new Date()
  const nextCycle = new Date(now)
  const hour = now.getHours()

  if (hour < 6) {
    nextCycle.setHours(6, 0, 0, 0)
  } else if (hour < 15) {
    nextCycle.setHours(15, 0, 0, 0)
  } else if (hour < 18) {
    nextCycle.setHours(18, 0, 0, 0)
  } else if (hour < 24) {
    nextCycle.setHours(0, 0, 0, 0)
  } else {
    nextCycle.setDate(now.getDate() + 1)
    nextCycle.setHours(6, 0, 0, 0)
  }

  const scheduledCycle = nextCycle.getTime() - now.getTime()

  return scheduledCycle
}

export const CycleProvider = ({ children }) => {
  const [cycle, setCycle] = useState(null)
  const timeoutIdRef = useRef(null)

  const updateCycle = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    const newCycle = getCycle()
    setCycle(newCycle)

    const nextTimeout = getNextCycleTimeout()

    timeoutIdRef.current = setTimeout(updateCycle, nextTimeout)
  }

  useEffect(() => {
    updateCycle()

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  if (cycle === null) return <Loading />

  return <CycleContext.Provider value={cycle}>{children}</CycleContext.Provider>
}

export const useCycleContext = () => useContext(CycleContext)
