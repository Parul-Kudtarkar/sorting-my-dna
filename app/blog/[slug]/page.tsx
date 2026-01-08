import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react"
import { format } from "date-fns"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Blog | Parul Kudtarkar`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image && {
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      }),
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {post.category && (
              <Badge variant="secondary">
                {post.category}
              </Badge>
            )}
            {post.featured && (
              <Badge variant="default">
                Featured
              </Badge>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            )}
            <div>
              <span>By {post.author}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Posts
            </Button>
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  )
}

// Simple markdown-like formatting function
// In production, you might want to use a proper markdown parser like 'remark' or 'markdown-it'
function formatContent(content: string): string {
  const lines = content.split('\n')
  const result: string[] = []
  let inCodeBlock = false
  let codeBlockLanguage = ''
  let codeBlockContent: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    // Handle code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        result.push(`<pre class="bg-muted p-4 rounded-lg overflow-x-auto mb-4"><code class="text-sm font-mono">${codeBlockContent.join('\n').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`)
        codeBlockContent = []
        inCodeBlock = false
        codeBlockLanguage = ''
      } else {
        // Start of code block
        inCodeBlock = true
        codeBlockLanguage = line.substring(3).trim()
      }
      continue
    }

    if (inCodeBlock) {
      codeBlockContent.push(line)
      continue
    }

    // Headers
    if (line.startsWith('# ')) {
      result.push(`<h1 class="text-3xl font-bold mt-8 mb-4">${line.substring(2)}</h1>`)
      continue
    }
    if (line.startsWith('## ')) {
      result.push(`<h2 class="text-2xl font-semibold mt-6 mb-3">${line.substring(3)}</h2>`)
      continue
    }
    if (line.startsWith('### ')) {
      result.push(`<h3 class="text-xl font-semibold mt-4 mb-2">${line.substring(4)}</h3>`)
      continue
    }
    
    // Empty lines
    if (line.trim() === '') {
      result.push('<br />')
      continue
    }

    // Process inline formatting
    let processedLine = line
    // Bold
    processedLine = processedLine.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic (but not if it's part of bold)
    processedLine = processedLine.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em>$1</em>')
    // Links
    processedLine = processedLine.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
    // Inline code
    processedLine = processedLine.replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    
    result.push(`<p class="mb-4 leading-7">${processedLine}</p>`)
  }

  return result.join('\n')
}

