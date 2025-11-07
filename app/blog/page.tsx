import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Coming Soon</p>
          <p className="text-base text-muted-foreground max-w-md">
            I'm working on sharing insights about AI, genomics, and research. Check back soon for updates!
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

