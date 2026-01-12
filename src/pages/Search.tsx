import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search as SearchIcon, X, Clock, ArrowRight, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { blogPosts, categories, getCategoryInfo, getAllTags, type BlogCategory } from '@/data/blogPosts';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') as BlogCategory | null;
  const initialTag = searchParams.get('tag') || '';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(initialCategory);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [showFilters, setShowFilters] = useState(false);

  const allTags = useMemo(() => getAllTags(), []);

  // Filter results based on query, category, and tag
  const results = useMemo(() => {
    let filtered = [...blogPosts];

    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.description.toLowerCase().includes(lowerQuery) ||
          post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    return filtered;
  }, [query, selectedCategory, selectedTag]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedTag) params.set('tag', selectedTag);
    setSearchParams(params, { replace: true });
  }, [query, selectedCategory, selectedTag, setSearchParams]);

  const clearFilters = () => {
    setQuery('');
    setSelectedCategory(null);
    setSelectedTag('');
  };

  const hasActiveFilters = query || selectedCategory || selectedTag;

  // Dynamic SEO title based on search
  const seoTitle = query
    ? `Search: "${query}" — StackCraft`
    : selectedCategory
    ? `${getCategoryInfo(selectedCategory)?.name || selectedCategory} Playbooks`
    : 'Search Engineering Playbooks';

  const seoDescription = query
    ? `Search results for "${query}" on StackCraft. Find production-grade engineering playbooks.`
    : 'Search through our library of production-grade engineering playbooks covering AI, .NET, Java, DevOps, Cloud, and more.';

  // JSON-LD for search results page
  const searchJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: seoTitle,
    description: seoDescription,
    url: `https://www.stackcraft.io/search${query ? `?q=${encodeURIComponent(query)}` : ''}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: results.length,
      itemListElement: results.slice(0, 10).map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          url: `https://www.stackcraft.io/blog/${post.slug}`,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords="search engineering playbooks, find tutorials, tech blog search, AI guides, .NET tutorials, Java guides, DevOps playbooks"
        canonicalUrl={`https://www.stackcraft.io/search${query ? `?q=${encodeURIComponent(query)}` : ''}`}
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(searchJsonLd)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Search Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              Search <span className="text-primary">Playbooks</span>
            </h1>

            {/* Search Input */}
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for AI, .NET, Java, DevOps, Cloud..."
                className="w-full pl-12 pr-12 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide filters' : 'Show filters'}
              </button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-6 rounded-xl border border-border bg-card"
              >
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-foreground mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() =>
                          setSelectedCategory(selectedCategory === cat.id ? null : cat.id)
                        }
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          selectedTag === tag
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Results */}
          <div className="max-w-4xl mx-auto">
            {/* Results count */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                {results.length === 0
                  ? 'No results found'
                  : `Found ${results.length} playbook${results.length !== 1 ? 's' : ''}`}
                {query && ` for "${query}"`}
                {selectedCategory && ` in ${getCategoryInfo(selectedCategory)?.name}`}
              </p>
            </div>

            {/* Results list */}
            <div className="space-y-4">
              {results.map((post, index) => {
                const categoryInfo = getCategoryInfo(post.category);
                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${
                                categoryInfo?.color || 'from-primary to-primary'
                              } text-white font-medium`}
                            >
                              {categoryInfo?.name || post.category}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {post.readTime} min
                            </span>
                          </div>
                          <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                            {post.title}
                          </h2>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {post.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.slice(0, 4).map(tag => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-2" />
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>

            {/* No results */}
            {results.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  No playbooks match your search criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:underline"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
