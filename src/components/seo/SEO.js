import { NextSeo } from "next-seo";
const SEO = ({ metaTitle, metaDescription }) => {
  return (
    <NextSeo
      canonical="https://mpathy.vercel.app/"
      title={metaTitle}
      description={metaDescription}
      openGraph={{
        url: "https://mpathy.vercel.app/",
        title: "Toros Advisory | Strategic Insights",
        description:
          "Toros Advisory helps organisations enter new markets, form partnerships, and defend deal value.",
        images: [
          {
            url: "https://mpathy.vercel.app/assets/mpathy-share.jpg",
            width: 800,
            height: 600,
            alt: "og-image",
            type: "image/jpg",
          },
        ],
        site_name: "https://mpathy.vercel.app/",
      }}
    />
  );
};

export default SEO;
