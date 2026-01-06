import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const TechCard = ({ icon: Icon, title, description, delay = 0 }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-card p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30 text-center group"
    >
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-soft-green flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h4 className="font-display font-semibold text-xl text-foreground mb-3">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default TechCard;
