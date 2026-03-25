import { useEffect, useState } from "react"
import { Warp } from "@paper-design/shaders-react"

export function LiquidMetalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 bg-[#1a0a02]" />
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Warp
        style={{ width: "100%", height: "100%" }}
        color1="hsla(25, 80%, 8%, 1)"
        color2="hsla(35, 70%, 22%, 1)"
        color3="hsla(45, 60%, 38%, 1)"
        scale={0.5}
        rotation={0}
        speed={0.12}
        proportion={0.35}
        softness={1}
        distortion={0.25}
        swirl={0.5}
        swirlIterations={8}
        shapeScale={0.1}
        shape={0}
      />
    </div>
  )
}