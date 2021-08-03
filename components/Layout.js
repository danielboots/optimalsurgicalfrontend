import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {/* <Header /> */}
      <Header />
      {/* <Hero /> */}

      {/* children_wraps content */}

      {children}

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Optimal Surgical",
  description:
    "Optimal Surgical is a medical device consultancy and distribution company experts within the medical device sector in Australia and New Zealand.",
  keywords:
    "Medical device distributors, Sales consultancy, Laparoscopic instruments, Surgical staplers, Advanced energy, Medical Sales Australia,",
};
