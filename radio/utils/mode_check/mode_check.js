export function getCycle() {
  const currentHour = new Date().getHours()

  if (currentHour >= 18 || currentHour <= 6) {
    return 'neurofunk'
  }

  return ''
}
