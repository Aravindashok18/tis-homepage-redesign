import { useCallback, useEffect, useState } from 'react'

const KEY = 'tis-theme'

const readInitial = () => document.documentElement.classList.contains('dark') ? 'dark' : 'light'

export default function useTheme() {
  const [theme, setTheme] = useState(readInitial)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* storage unavailable (private mode) — theme still works for the session */
    }
  }, [theme])

  const toggle = useCallback(() => {
    const root = document.documentElement
    root.classList.add('theme-transition')
    setTimeout(() => root.classList.remove('theme-transition'), 450)
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
