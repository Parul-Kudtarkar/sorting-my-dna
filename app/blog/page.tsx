import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { getAllPosts, getAllCategories, getAllTags } from "@/lib/blog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { format } from "date-fns"

export const metadata = {
  title: 'Blog | Parul Kudtarkar',
  description: 'Insights about AI, genomics, and research from Parul Kudtarkar',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights about AI, genomics, and research. Sharing learnings and discoveries from my work in metabolic disease research and drug discovery.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  {post.image && (
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {post.category && (
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      )}
                      {post.featured && (
                        <Badge variant="default" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 mt-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
                      </div>
                      {post.readingTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readingTime} min read</span>
                        </div>
                      )}
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                    <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <h2 className="text-2xl font-semibold">No posts yet</h2>
            <p className="text-muted-foreground max-w-md">
              Blog posts will appear here once they're published.
            </p>
          </div>
        )}

        {/* Categories and Tags Section */}
        {(categories.length > 0 || tags.length > 0) && (
          <div className="mt-16 pt-12 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge key={category} variant="secondary" className="text-sm">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  )
}
