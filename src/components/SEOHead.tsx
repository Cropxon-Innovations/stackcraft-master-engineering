import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  noIndex?: boolean;
}

const SEOHead = ({
  title = 'StackCraft — Production-Grade Engineering Playbooks',
  description = 'Master production-grade software engineering with deep technical playbooks. Learn system design, API architecture, backend engineering, and scalable infrastructure.',
  keywords = 'engineering playbooks, system design, software architecture, backend engineering',
  canonicalUrl = 'https://www.stackcraft.io/',
  ogImage = 'https://www.stackcraft.io/og-image.png',
  ogType = 'website',
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  noIndex = false,
}: SEOHeadProps) => {
  const fullTitle = title.includes('StackCraft') ? title : `${title} | StackCraft`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific */}
      {ogType === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {ogType === 'article' && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
    </Helmet>
  );
};

export default SEOHead;
