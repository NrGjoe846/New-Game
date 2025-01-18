"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="mx-auto max-w-7xl"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xl border-b border-white/10" />
          <div className="relative px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center space-x-2 group"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-1OCgHoMxOnIRXGCyBBjmaTlx4TyjwL.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                UNAI TECH
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/"
                className="text-white/90 hover:text-white transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                href="/about"
                className="text-white/70 hover:text-white transition-colors relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                href="/blog"
                className="text-white/70 hover:text-white transition-colors relative group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                href="/pages"
                className="text-white/70 hover:text-white transition-colors relative group"
              >
                Pages
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                href="/contact"
                className="text-white/70 hover:text-white transition-colors relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    English
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32 bg-black/90 backdrop-blur-xl border-white/10">
                  <DropdownMenuItem className="text-white/70 hover:text-white focus:text-white focus:bg-white/10">
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/70 hover:text-white focus:text-white focus:bg-white/10">
                    French
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/70 hover:text-white focus:text-white focus:bg-white/10">
                    German
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/70 hover:text-white focus:text-white focus:bg-white/10">
                    Spanish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                Sign In
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
                  text-white border-0 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Register
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl"
              >
                <div className="px-4 py-4 space-y-4">
                  <Link 
                    href="/"
                    className="block text-white/90 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about"
                    className="block text-white/70 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                  <Link 
                    href="/blog"
                    className="block text-white/70 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/pages"
                    className="block text-white/70 hover:text-white transition-colors"
                  >
                    Pages
                  </Link>
                  <Link 
                    href="/contact"
                    className="block text-white/70 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                  <div className="pt-4 space-y-4">
                    <Button
                      variant="ghost"
                      className="w-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Sign In
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
                        text-white border-0 transition-all duration-300"
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  )
}

