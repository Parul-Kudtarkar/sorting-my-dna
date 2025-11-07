"use client"

import { useEffect, useRef } from "react"

export function ProteinAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    let time = 0

    const generateProteinPoints = (baseTime: number) => {
      const points: Array<{ x: number; y: number; z: number; color: string; radius: number }> = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Generate spherical cloud of points
      for (let i = 0; i < 120; i++) {
        const phi = Math.acos(2 * Math.random() - 1)
        const theta = Math.random() * Math.PI * 2
        const r = 60 + Math.random() * 40

        const x = centerX + r * Math.sin(phi) * Math.cos(theta)
        const y = centerY + r * Math.sin(phi) * Math.sin(theta)
        const z = r * Math.cos(phi)

        const isBlue = Math.random() > 0.5
        const color = isBlue ? "#0284C7" : "#22C55E"

        points.push({
          x,
          y,
          z,
          color,
          radius: 3 + Math.random() * 2,
        })
      }

      // Generate protein chains
      const chains = []
      for (let chain = 0; chain < 3; chain++) {
        const chainPoints = []
        const chainOffset = (chain * Math.PI * 2) / 3
        for (let i = 0; i < 40; i++) {
          const angle = (baseTime + chain * Math.PI * 2) / 1000 + (i / 40) * Math.PI * 2 + chainOffset
          const radius = 50 + (i / 40) * 30
          const height = (i / 40) * 100 - 50

          chainPoints.push({
            x: centerX + radius * Math.cos(angle),
            y: centerY + height,
            z: radius * Math.sin(angle) + (chain - 1) * 20,
          })
        }
        chains.push(chainPoints)
      }

      return { points, chains }
    }

    const draw = () => {
      time += 16
      const { points, chains } = generateProteinPoints(time)

      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Sort by z for depth
      const allElements: Array<{
        type: "point" | "chain"
        data: any
        z: number
      }> = []

      points.forEach((p) => {
        allElements.push({ type: "point", data: p, z: p.z })
      })

      chains.forEach((chain) => {
        chain.forEach((p) => {
          allElements.push({ type: "chain", data: p, z: p.z })
        })
      })

      allElements.sort((a, b) => a.z - b.z)

      // Draw chains
      chains.forEach((chain, chainIdx) => {
        const isBlue = chainIdx === 0
        ctx.strokeStyle = isBlue ? "#0284C7" : "#22C55E"
        ctx.lineWidth = 2.5
        ctx.globalAlpha = 0.7

        ctx.beginPath()
        chain.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.x, p.y)
          else ctx.lineTo(p.x, p.y)
        })
        ctx.stroke()

        // Draw chain nodes
        ctx.globalAlpha = 0.8
        chain.forEach((p) => {
          ctx.fillStyle = isBlue ? "#0284C7" : "#22C55E"
          ctx.beginPath()
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
          ctx.fill()
        })
      })

      // Draw cloud points
      ctx.globalAlpha = 0.6
      points.forEach((p) => {
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connecting lines between chains
      ctx.globalAlpha = 0.15
      ctx.strokeStyle = "#6B7280"
      ctx.lineWidth = 0.5
      for (let i = 0; i < chains[0].length; i += 8) {
        for (let c1 = 0; c1 < chains.length; c1++) {
          for (let c2 = c1 + 1; c2 < chains.length; c2++) {
            ctx.beginPath()
            ctx.moveTo(chains[c1][i].x, chains[c1][i].y)
            ctx.lineTo(chains[c2][i].x, chains[c2][i].y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-black/5">
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </div>
  )
}
