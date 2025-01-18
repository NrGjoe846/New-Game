"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LoginForm } from "./login-form"
import { SignUpForm } from "./signup-form"

export default function AuthContainer() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="w-full min-h-screen pt-20">
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="login"
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5
              }}
            >
              <LoginForm onFlip={() => setIsFlipped(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -180, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5
              }}
            >
              <SignUpForm onFlip={() => setIsFlipped(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

