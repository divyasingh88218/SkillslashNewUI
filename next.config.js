/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  async redirects() {
    return [
      {
        source: "/ai-and-ml-program",
        destination:
          "/advanced-data-science-and-ai-course-with-real-work-experience",
        permanent: true,
      },
      {
        source: "/data-science-course-in-hyderabad",
        destination: "/data-science-course-training-hyderabad",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["skillslash-cdn.s3.ap-south-1.amazonaws.com"],
  },
};
