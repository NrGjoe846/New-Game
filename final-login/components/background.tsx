"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null)
  const crystalRef = useRef<THREE.Group | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Crystal geometry
    const crystal = new THREE.Group()
    const geometry = new THREE.OctahedronGeometry(2, 0)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.5,
      envMapIntensity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    })

    const mesh = new THREE.Mesh(geometry, material)
    crystal.add(mesh)
    scene.add(crystal)
    crystalRef.current = crystal

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x4facfe, 2)
    pointLight1.position.set(5, 5, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x00f2fe, 2)
    pointLight2.position.set(-5, -5, -5)
    scene.add(pointLight2)

    // Camera position
    camera.position.z = 5

    // Animation
    let frame = 0
    const animate = () => {
      requestAnimationFrame(animate)

      if (crystalRef.current) {
        // Rotation
        crystalRef.current.rotation.x += 0.002
        crystalRef.current.rotation.y += 0.003

        // Floating motion
        const floatY = Math.sin(frame * 0.02) * 0.1
        crystalRef.current.position.y = floatY

        frame++
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    </div>
  )
}

