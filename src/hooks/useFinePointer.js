import { useEffect, useState } from 'react'

/** True only on devices with a precise pointer (mouse/trackpad), not touch. */
export default function useFinePointer() {
  const [fine, setFine] = useState(() => matchMedia('(pointer: fine)').matches)

  useEffect(() => {
    const mq = matchMedia('(pointer: fine)')
    const onChange = (e) => setFine(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return fine
}
