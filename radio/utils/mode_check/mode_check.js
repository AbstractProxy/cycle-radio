export function getCycle() {
  const now = new Date()
  const currentHour = now.getHours()

  if (currentHour >= 18 && currentHour <= 23) {
    return 'neurofunk'
  } else if (currentHour >= 15 && currentHour < 18) {
    return 'breakcore'
  } else if (currentHour >= 0 && currentHour < 6) {
    return 'techstep'
  } else {
    return 'default'
  }
}

export function getCycleColor(
  cycle,
  isButtonColor = false,
  isMobileSidebar = false,
) {
  const colorMap = {
    neurofunk: {
      color: 'text-green-500',
      colorHover: 'hover:text-green-700',
      bg: 'bg-green-800',
      bgHover: 'hover:bg-green-900',
      scroll: 'scrollbar-thumb-green-500',
      icon: 'h-6 w-6 shrink-0 text-green-500',
      margin: 'mr-4',
    },
    breakcore: {
      color: 'text-blue-500',
      colorHover: 'hover:text-blue-700',
      bg: 'bg-blue-800',
      bgHover: 'hover:bg-blue-900',
      scroll: 'scrollbar-thumb-blue-500',
      icon: 'h-6 w-6 shrink-0 text-blue-500',
      margin: 'mr-4',
    },
    techstep: {
      color: 'text-red-500',
      colorHover: 'hover:text-red-700',
      bg: 'bg-red-800',
      bgHover: 'hover:bg-red-900',
      scroll: 'scrollbar-thumb-red-500',
      icon: 'h-6 w-6 shrink-0 text-red-500',
      margin: 'mr-4',
    },
    default: {
      color: 'text-pink-500',
      colorHover: 'hover:text-pink-700',
      bg: 'bg-pink-800',
      bgHover: 'hover:bg-pink-900',
      scroll: 'scrollbar-thumb-pink-500',
      icon: 'h-6 w-6 shrink-0 text-pink-500',
      margin: 'mr-4',
    },
  }

  const colors = colorMap[cycle] || colorMap.default

  return {
    color: isButtonColor
      ? `${colors.color} ${colors.colorHover}`
      : colors.color,
    bg: `${colors.bg} ${colors.bgHover}`,
    scroll: `${colors.scroll}`,
    icon: isMobileSidebar
      ? `${colors.icon} ${colors.margin}`
      : `${colors.icon}`,
  }
}

export function getGradientStops(cycle) {
  if (cycle === 'neurofunk') {
    return (
      <>
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="50%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#22c55e" />
      </>
    )
  } else if (cycle === 'breakcore') {
    return (
      <>
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#3b82f6" />
      </>
    )
  } else if (cycle === 'techstep') {
    return (
      <>
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="50%" stopColor="#b91c1c" />
        <stop offset="100%" stopColor="#ef4444" />
      </>
    )
  } else {
    return (
      <>
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="50%" stopColor="#db2777" />
        <stop offset="100%" stopColor="#ec4899" />
      </>
    )
  }
}

export function randomBetween(min, max, seed = 1) {
  return () => {
    let rand = Math.sin(seed++) * 10000
    rand = rand - Math.floor(rand)
    return Math.floor(rand * (max - min + 1) + min)
  }
}

export function getCycleMeta(cycle) {
  const meta = {
    neurofunk: {
      src: '/neurofunkPoster.png',
      genreSrc: '/neurofunkGenre.png',
      genreAlt: 'Neurofunk Drum and Bass genre artwork',
    },
    breakcore: {
      src: '/breakcorePoster.png',
      genreSrc: '/breakcoreGenre.png',
      genreAlt: 'Breakcore Drum and Bass genre artwork',
    },
    techstep: {
      src: '/techstepPoster.png',
      genreSrc: '/techstepGenre.png',
      genreAlt: 'Techstep Drum and Bass genre artwork',
    },
    default: {
      src: '/poster.png',
      genreSrc: '/liquidGenre.png',
      genreAlt: 'Liquid Drum and Bass genre artwork',
    },
  }

  return meta[cycle] || meta.default
}

export const scrollbarColors = {
  neurofunk: 'scrollbar-thumb-green-500',
  breakcore: 'scrollbar-thumb-blue-500',
  techstep: 'scrollbar-thumb-red-500',
  default: 'scrollbar-thumb-pink-500',
}
