import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Brain,
  ArrowRight,
  Bot,
  Code,
  Eye,
  Image,
  Network,
  Paintbrush,
  Clock,
  DollarSign,
  TrendingUp,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechCard from "@/components/TechCard";
import { Button } from "@/components/ui/button";

const About = () => {
  const technologies = [
    {
      icon: Bot,
      title: "TensorFlow",
      description: "Deep learning framework for training accurate disease detection models",
    },
    {
      icon: Code,
      title: "Flask",
      description: "Lightweight Python web framework for backend API and server logic",
    },
    {
      icon: Eye,
      title: "OpenCV",
      description: "Computer vision library for image processing and contour detection",
    },
    {
      icon: Image,
      title: "Image Processing",
      description: "Advanced algorithms for preprocessing and analyzing plant images",
    },
    {
      icon: Network,
      title: "Deep Learning",
      description: "Neural networks trained on thousands of plant disease images",
    },
    {
      icon: Paintbrush,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for responsive and beautiful UI design",
    },
  ];

  const whyReasons = [
    {
      icon: Clock,
      title: "Time-Saving Solution",
      description:
        "Manual plant disease identification is time-consuming and requires expert knowledge. Our tool automates the process, providing instant results.",
    },
    {
      icon: DollarSign,
      title: "Reduce Financial Loss",
      description:
        "Early detection prevents crop loss, saving farmers significant financial resources and ensuring food security.",
    },
    {
      icon: Leaf,
      title: "Support Sustainable Agriculture",
      description:
        "By enabling timely treatment, we reduce the need for excessive pesticides, promoting environmentally friendly farming practices.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description:
        "Track disease patterns over time and gain valuable insights for better crop management and prevention strategies.",
    },
  ];

  const howItWorks = [
    "Users upload an image of a plant leaf through our intuitive interface",
    "The system processes the image using a CNN-based trained model",
    "Contours and infected areas are detected via advanced image processing",
    "The model predicts the disease with high accuracy using machine learning",
    "A detailed result with guidance and treatment recommendations is shown",
    "Historical data is stored for tracking disease patterns and prevention",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-hero-gradient">
        <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-l from-primary/5 to-transparent clip-path-diagonal" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              About{" "}
              <span className="relative">
                <span className="text-primary">Plant Diagnosis Pro</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary -z-10 rounded" />
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Empowering farmers and gardeners with AI-driven plant disease detection for
              healthier crops and sustainable agriculture.
            </p>
            <Button asChild size="lg">
              <Link to="/detection">
                Try Detection Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission & Technology
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combining cutting-edge AI with agricultural expertise to revolutionize plant
              health management
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* What is Plant Diagnosis Pro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-card border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-secondary">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  What is Plant Diagnosis Pro?
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Plant Diagnosis Pro is an advanced AI-powered application designed to analyze
                plant leaf images and detect possible diseases with remarkable accuracy. By
                combining deep learning and sophisticated image processing techniques, our
                system provides fast and reliable predictions to help farmers prevent crop
                loss and maximize yield.
              </p>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-card border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-secondary">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  How It Works
                </h3>
              </div>
              <ul className="space-y-3">
                {howItWorks.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies Used
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built with modern technologies for optimal performance and accuracy
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <TechCard
                key={tech.title}
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why This Project Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary to-soft-green p-8 md:p-12 rounded-3xl"
          >
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why This Project Matters
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Addressing critical challenges in modern agriculture
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="p-3 rounded-xl bg-card shadow-card h-fit">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven plant disease detection today.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/detection">
                Try Detection Now
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

export default About;
