# Blog Posts

This directory is for organizing blog post content. Currently, blog posts are stored in `lib/blog.ts` as TypeScript objects.

## Adding a New Blog Post

To add a new blog post, edit `/lib/blog.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  slug: "your-post-slug",           // URL-friendly identifier (e.g., "ai-in-genomics")
  title: "Your Post Title",
  description: "A brief description of the post",
  date: "2025-01-27",                // YYYY-MM-DD format
  author: "Parul Kudtarkar",
  category: "AI",                    // Optional
  tags: ["AI", "Genomics"],          // Optional array
  content: `Your markdown content here...`,
  readingTime: 5,                    // Optional, in minutes
  featured: false                    // Optional, for featured posts
}
```

## Future Enhancements

Consider migrating to:
- Markdown files in this directory (e.g., `content/blog/your-post-slug.md`)
- A headless CMS (Contentful, Sanity, etc.)
- MDX for React components in markdown

## Content Formatting

The blog content supports basic markdown:
- `# Heading 1`
- `## Heading 2`
- `### Heading 3`
- `**bold**` and `*italic*`
- `[link text](url)`

For more complex formatting, you can use HTML directly in the content string.

