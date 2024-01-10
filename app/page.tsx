import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="bg-white h-screen w-screen flex justify-center items-center">
      <Link href="/dashboard">
        <Button variant="default">Go to Dashboard</Button>
      </Link>
    </main>
  )
}
