import { NextSeo } from "next-seo";
const SEO = ({ metaTitle, metaDescription }) => {
  return (
    <NextSeo
      canonical="https://mpathyapps.com/"
      title={metaTitle}
      description={metaDescription}
      openGraph={{
        url: "https://mpathyapps.com/",
        title: "Mpathy emotional revolution | Social Enterprise",
        description:
          "Mpathy Apps is a unique Social Enterprise, dedicated to developing and distributing new mobile applications to boost positive emotional resilience and mental health.",
        images: [
          {
            url: "https://mpathyapps.com/assets/mpathy-share.jpg",
            width: 800,
            height: 600,
            alt: "og-image",
            type: "image/jpg",
          },
        ],
        site_name: "https://mpathyapps.com/",
      }}
    />
  );
};

export default SEO;
