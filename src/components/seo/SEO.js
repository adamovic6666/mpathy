import { NextSeo } from "next-seo";
const SEO = ({ metaTitle, metaDescription }) => {
  return (
    <NextSeo
      canonical="https://mpathy.com/"
      openGraph={{
        url: "https://mpathy.com/",
        title: "Toros Advisory | Strategic Insights",
        description:
          "Toros Advisory helps organisations enter new markets, form partnerships, and defend deal value.",
        images: [
          {
            url: "https://mpathy.com/share.jpg",
            width: 800,
            height: 600,
            alt: "og-image",
            type: "image/jpg",
          },
        ],
        site_name: "https://mpathy.com/",
      }}
    />
  );
};

export default SEO;
