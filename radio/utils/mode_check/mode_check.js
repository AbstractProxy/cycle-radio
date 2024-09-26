// utils/mode_check.js
export function useMode() {
  const currentHour = new Date().getHours()

  return currentHour >= 18 || currentHour <= 6 // Vraća true ili false
}
