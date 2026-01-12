import { Helmet } from 'react-helmet-async';

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
  keywords?: string[];
  articleSection?: string;
  wordCount?: number;
  readTime?: number;
}

const ArticleJsonLd = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl = 'https://www.stackcraft.io/about',
  publisherName = 'StackCraft',
  publisherLogo = 'https://www.stackcraft.io/og-image.png',
  keywords = [],
  articleSection,
  wordCount,
  readTime,
}: ArticleJsonLdProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': url,
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    ...(articleSection && { articleSection }),
    ...(wordCount && { wordCount }),
    ...(readTime && {
      timeRequired: `PT${readTime}M`,
    }),
  };

  // TechArticle schema for engineering content
  const techArticleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#tech`,
    headline: title,
    description,
    proficiencyLevel: 'Expert',
    dependencies: keywords.join(', '),
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      url: 'https://www.stackcraft.io',
    },
  };

  // BreadcrumbList for SEO
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.stackcraft.io',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.stackcraft.io/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(techArticleJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
    </Helmet>
  );
};

export default ArticleJsonLd;
