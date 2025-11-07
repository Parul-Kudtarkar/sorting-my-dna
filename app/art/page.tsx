import Header from "@/components/header"
import ArtGallery from "@/components/art-gallery"
import Footer from "@/components/footer"

export default function ArtPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ArtGallery />
      <Footer />
    </main>
  )
}
