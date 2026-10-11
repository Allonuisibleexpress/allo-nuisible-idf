'use client'
import { useEffect } from 'react'

export default function RevealManager() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
    )

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
