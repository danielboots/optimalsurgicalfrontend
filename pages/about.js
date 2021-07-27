import Layout from "../components/Layout";
import FeatureGrid from "@/components/FeatureGrid";
import Team from "@/components/Team";
import Hero from "@/components/Hero";

const about = () => {
  return (
    <Layout
      title="About | Optimal Surgical"
      description="About| Optimal Surgical"
    >
      <div className="font-body ">
        <Hero />
        <FeatureGrid />
      </div>
    </Layout>
  );
};

export default about;
