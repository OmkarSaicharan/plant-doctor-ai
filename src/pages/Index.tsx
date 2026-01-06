import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, ShieldCheck, TrendingUp, Lightbulb, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import UploadCard from "@/components/UploadCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero-gradient">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent transform rotate-12 origin-top-right" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Detect Plant Disease
                <br />
                <span className="relative">
                  <span className="text-primary">Accurately with AI</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary -z-10 rounded" />
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Upload a clear leaf photo and get instant diagnosis, causes & treatment
                suggestions powered by advanced machine learning.
              </p>

              {/* Feature Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <FeatureCard
                  icon={Zap}
                  title="Fast Results"
                  description="Get diagnosis in seconds"
                  delay={0.1}
                />
                <FeatureCard
                  icon={ShieldCheck}
                  title="Treatment Tips"
                  description="Actionable recommendations"
                  delay={0.2}
                />
                <FeatureCard
                  icon={TrendingUp}
                  title="Track History"
                  description="Monitor plant health over time"
                  delay={0.3}
                />
              </div>

              {/* Tip Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-3 p-4 bg-secondary rounded-xl border border-primary/20"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">Tip:</span>
                  <span className="text-muted-foreground ml-1">
                    Use a well-lit photo with the leaf centered for best results.
                  </span>
                </div>
              </motion.div>

              <div className="flex gap-4 mt-8">
                <Button asChild size="lg">
                  <Link to="/detection">
                    Try Detection
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* Upload Card */}
            <div className="flex justify-center lg:justify-end">
              <UploadCard />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Plant Diseases" },
              { value: "95%", label: "Accuracy Rate" },
              { value: "1000+", label: "Happy Users" },
              { value: "24/7", label: "Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three simple steps to diagnose your plant's health
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Photo",
                description:
                  "Take a clear photo of the affected leaf and upload it to our platform.",
              },
              {
                step: "02",
                title: "AI Analysis",
                description:
                  "Our advanced AI model analyzes the image and detects disease patterns.",
              },
              {
                step: "03",
                title: "Get Results",
                description:
                  "Receive detailed diagnosis with treatment recommendations instantly.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow">
                  <span className="font-display text-6xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Protect Your Plants?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of farmers and gardeners using AI to keep their plants healthy.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/detection">
                Start Free Analysis
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
