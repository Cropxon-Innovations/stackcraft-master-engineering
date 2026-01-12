import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag, Twitter, Linkedin, Github, Share2, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { getPostBySlug, getRelatedPosts, getCategoryInfo, type BlogPost as BlogPostType } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The playbook you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryInfo = getCategoryInfo(post.category);
  const relatedPosts = getRelatedPosts(post, 3);
  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const shareUrl = `https://www.stackcraft.io/blog/${post.slug}`;
  const shareText = `${post.title} - StackCraft Engineering Playbook`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.title} — StackCraft Engineering Playbook`}
        description={post.description}
        keywords={post.tags.join(', ')}
        canonicalUrl={shareUrl}
        ogImage={post.image}
      />
      
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.modifiedAt}
        authorName={post.author.name}
        authorUrl={post.author.url}
        image={post.image}
        url={shareUrl}
      />

      <Helmet>
        <link rel="alternate" type="application/rss+xml" title="StackCraft RSS Feed" href="https://www.stackcraft.io/rss.xml" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <Link to={`/blog?category=${post.category}`} className="hover:text-primary transition-colors">
              {categoryInfo?.name}
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4">
          <header className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Badge */}
              <Link
                to={`/blog?category=${post.category}`}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${categoryInfo?.color || 'from-primary to-primary'} text-white text-sm font-medium mb-6`}
              >
                {categoryInfo?.name}
              </Link>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>{publishDate}</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Engineering Playbook</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/search?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Link>
                ))}
              </div>

              {/* Share Button */}
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </motion.div>
          </header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-muted prose-pre:border prose-pre:border-border
                prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:py-1
                prose-li:text-muted-foreground
                prose-table:border-border
                prose-th:text-foreground prose-th:bg-muted
                prose-td:border-border"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n/g, '<br>')
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                  .replace(/## (.*?) \{#(\w+)\}/g, '<h2 id="$2">$1</h2>')
                  .replace(/## (.*)/g, '<h2>$1</h2>')
                  .replace(/### (.*)/g, '<h3>$1</h3>')
                  .replace(/# (.*)/g, '<h1>$1</h1>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                  .replace(/---/g, '<hr>')
                  .replace(/\| (.*?) \|/g, '<tr><td>$1</td></tr>')
              }}
            />
          </motion.div>

          {/* Author Bio */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mt-16 p-8 bg-card border border-border rounded-2xl"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.author.bio}
                </p>
                <div className="flex items-center gap-4">
                  {post.author.twitter && (
                    <a
                      href={`https://twitter.com/${post.author.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Follow ${post.author.name} on Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {post.author.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${post.author.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Connect with ${post.author.name} on LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {post.author.github && (
                    <a
                      href={`https://github.com/${post.author.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Follow ${post.author.name} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Newsletter CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <NewsletterSignup source={`blog-${post.slug}`} />
          </motion.section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto mt-16"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Related Playbooks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => {
                  const relatedCategory = getCategoryInfo(relatedPost.category);
                  return (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
                    >
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${relatedCategory?.color || 'from-primary to-primary'} text-white mb-3`}>
                        {relatedCategory?.name}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {relatedPost.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime} min read
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* Back to Blog */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-border">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all playbooks
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;