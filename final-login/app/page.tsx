import AuthContainer from "@/components/auth-container"
import { NavigationBar } from "@/components/navigation-bar"
import Background from "@/components/background"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden">
      <Background />
      <div className="relative z-10">
        <NavigationBar />
        <AuthContainer />
      </div>
    </main>
  )
}

