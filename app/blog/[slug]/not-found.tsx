import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Post Not Found</h1>
          <p className="text-xl text-muted-foreground">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}

