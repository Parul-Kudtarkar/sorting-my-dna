import Header from "@/components/header"
import Hero from "@/components/hero"
import WorkExperience from "@/components/work-experience"
import Education from "@/components/education"
import ReviewingExperience from "@/components/reviewing-experience"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WorkExperience />
      <Education />
      <ReviewingExperience />
      <Footer />
    </main>
  )
}
