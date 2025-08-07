import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = "Afristone - Premium Natural Stone Supply & Installation Services Kenya",
  description = "Leading natural stone supplier in Kenya since 2010. Expert wall cladding, floor finishes, water features & stone installation. Premium Tanga Yellow, Black, Silver & Grey stone varieties. Free quotes available.",
  keywords = "natural stone supplier Kenya, stone cladding installation, Tanga Yellow stone, stone wall cladding, natural stone finishes, stone supplier Nairobi, stone installation services, premium stone Kenya",
  image = "https://afristone.lovable.app/Afristone-All%20things%20Stone/Tanga%20Yellow%20Stone/2025053121292496.jpg",
  url = "https://afristone.lovable.app/",
  type = "website",
  structuredData
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Afristone" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;