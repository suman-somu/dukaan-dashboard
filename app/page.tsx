import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="/dashboard">
        <button>
          Click me
        </button>
      </Link>
    </main>
  )
}
