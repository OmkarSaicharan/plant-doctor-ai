import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
    >
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h4 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
