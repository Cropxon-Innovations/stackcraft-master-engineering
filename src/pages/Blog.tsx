import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Brain, Code2, Coffee, Container, Cloud, Network, TestTube2, Webhook } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { blogPosts, categories, getCategoryInfo, type BlogCategory, type CategoryInfo } from '@/data/blogPosts';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Code2,
  Coffee,
  Container,
  Cloud,
  Network,
  TestTube2,
  Webhook,
};

const CategoryCard = ({ category }: { category: CategoryInfo }) => {
  const Icon = iconMap[category.icon] || Code2;
  const postCount = blogPosts.filter(p => p.category === category.id).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/blog?category=${category.id}`}
        className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 card-glow"
      >
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {category.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{postCount} playbooks</span>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedPost = ({ post }: { post: typeof blogPosts[0] }) => {
  const categoryInfo = getCategoryInfo(post.category);
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="block p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${categoryInfo?.color || 'from-primary to-primary'} text-white font-medium`}>
            {categoryInfo?.name || post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {post.readTime} min read
          </span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <time className="text-xs text-muted-foreground" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </time>
          <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Read more <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

const Blog = () => {
  // JSON-LD structured data for Blog
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://www.stackcraft.io/blog',
    name: 'StackCraft Engineering Blog',
    description: 'Production-grade engineering playbooks covering AI, .NET, Java, DevOps, Cloud, and System Architecture.',
    url: 'https://www.stackcraft.io/blog',
    publisher: {
      '@type': 'Organization',
      name: 'StackCraft',
      url: 'https://www.stackcraft.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.stackcraft.io/og-image.png',
      },
    },
    blogPost: blogPosts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      '@id': `https://www.stackcraft.io/blog/${post.slug}`,
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.modifiedAt,
      author: {
        '@type': 'Person',
        name: post.author.name,
        url: post.author.url,
      },
      image: post.image,
      url: `https://www.stackcraft.io/blog/${post.slug}`,
    })),
  };

  // ItemList for categories
  const categoriesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Engineering Playbook Categories',
    description: 'Browse playbooks by technology category',
    itemListElement: categories.map((cat, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: cat.name,
      url: `https://www.stackcraft.io/blog?category=${cat.id}`,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Engineering Blog — AI, .NET, Java, DevOps, Cloud Playbooks"
        description="Explore production-grade engineering playbooks covering AI & Machine Learning, .NET, Java, DevOps, Cloud Infrastructure, System Architecture, Testing, and API Design. Battle-tested patterns from real engineering teams."
        keywords="engineering blog, tech blog, AI blog, .NET tutorials, Java guides, DevOps playbooks, cloud architecture, system design blog, software engineering, microservices, kubernetes, aws, azure"
        canonicalUrl="https://www.stackcraft.io/blog"
      />
      
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(blogJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(categoriesJsonLd)}</script>
        <link rel="alternate" type="application/rss+xml" title="StackCraft RSS Feed" href="https://www.stackcraft.io/rss.xml" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Engineering <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Production-grade playbooks for modern software engineering. Deep dives into AI, cloud architecture, DevOps, and more.
            </p>
            <Link
              to="/search"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Search all playbooks <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Latest Posts */}
        <section className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Latest Playbooks</h2>
            <Link
              to="/playbooks"
              className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 6).map(post => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* RSS Feed CTA */}
        <section className="container mx-auto px-4 mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">Stay Updated</h2>
            <p className="text-muted-foreground mb-4">
              Subscribe to our RSS feed to get the latest engineering playbooks delivered to your reader.
            </p>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe via RSS
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
