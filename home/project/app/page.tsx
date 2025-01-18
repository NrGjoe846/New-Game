import { NavigationBar } from "@/components/navigation-bar"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <NavigationBar />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Welcome to UNAI TECH
            </h1>
            <p className="text-xl text-gray-300">
              Experience the future of technology with our innovative solutions and cutting-edge services.
            </p>
            <div className="flex gap-4">
              <Link href="/login">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
                    text-white border-0 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Started
                </Button>
              </Link>
              <Button 
                variant="outline"
                className="border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x-SZaVKtNLCA74SrX2i257Hx8twC5JnV.png"
              alt="Hero Image"
              width={800}
              height={800}
              className="w-full h-auto animate-float drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}