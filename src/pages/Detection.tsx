import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Search,
  Image,
  X,
  Leaf,
  AlertCircle,
  CheckCircle,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DiagnosisResult {
  disease: string;
  confidence: number;
  cause: string;
  treatment: string;
}

const Detection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a valid image (PNG, JPG, JPEG)");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      toast.error("File size must be less than 8MB");
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResult(null);
  };

  const clearFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first");
      return;
    }

    setIsAnalyzing(true);

    // Simulate analysis - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Demo result
    setResult({
      disease: "Leaf Blight",
      confidence: 94.5,
      cause:
        "Caused by fungal pathogens, typically spread through infected plant debris and water splashing.",
      treatment:
        "Remove infected leaves, apply fungicide, ensure proper spacing between plants for air circulation, and avoid overhead watering.",
    });

    setIsAnalyzing(false);
    toast.success("Analysis complete!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 overflow-hidden bg-hero-gradient">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Plant Disease{" "}
              <span className="text-primary">Detection</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Upload a photo of your plant leaf and get instant AI-powered diagnosis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Upload className="h-5 w-5 text-primary" />
                  </div>
                  Upload Image
                </h2>

                <div
                  className={`relative border-2 border-dashed rounded-xl p-8 transition-all cursor-pointer ${
                    dragActive
                      ? "border-primary bg-secondary"
                      : "border-border hover:border-primary/50 hover:bg-secondary/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => inputRef.current?.click()}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleChange}
                    className="hidden"
                  />

                  {previewUrl ? (
                    <div className="relative">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          clearFile();
                        }}
                        className="absolute top-3 right-3 p-2 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4 py-8">
                      <div className="p-5 rounded-full bg-secondary">
                        <Upload className="h-10 w-10 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-foreground mb-1">
                          Drop your image here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          or click to browse files
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {selectedFile && (
                  <div className="mt-4 flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Image className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground truncate flex-1">
                      {selectedFile.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {(selectedFile.size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                )}

                <Button
                  onClick={handleAnalyze}
                  className="w-full mt-6"
                  size="lg"
                  disabled={!selectedFile || isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <div className="h-5 w-5 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Analyze Image
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Supported: JPG, JPEG, PNG • Max: 8MB
                </p>
              </motion.div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Leaf className="h-5 w-5 text-primary" />
                  </div>
                  Diagnosis Results
                </h2>

                {result ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Disease Name */}
                    <div className="p-4 rounded-xl bg-secondary border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-foreground">
                          Detected Disease
                        </span>
                      </div>
                      <p className="text-2xl font-display font-bold text-primary">
                        {result.disease}
                      </p>
                    </div>

                    {/* Confidence */}
                    <div className="p-4 rounded-xl bg-muted">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">
                          Confidence Level
                        </span>
                        <span className="font-bold text-primary">
                          {result.confidence}%
                        </span>
                      </div>
                      <div className="h-3 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${result.confidence}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>

                    {/* Cause */}
                    <div className="p-4 rounded-xl bg-muted">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">Cause</span>
                      </div>
                      <p className="text-muted-foreground">{result.cause}</p>
                    </div>

                    {/* Treatment */}
                    <div className="p-4 rounded-xl bg-secondary border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">
                          Recommended Treatment
                        </span>
                      </div>
                      <p className="text-muted-foreground">{result.treatment}</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-80 text-center">
                    <div className="p-6 rounded-full bg-muted mb-6">
                      <Leaf className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      No Results Yet
                    </h3>
                    <p className="text-muted-foreground max-w-xs">
                      Upload an image and click "Analyze" to get your plant disease
                      diagnosis
                    </p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Tips Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-secondary rounded-2xl p-8 border border-primary/20"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Tips for Best Results
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Good Lighting",
                    description:
                      "Take photos in natural daylight for clearer image quality",
                  },
                  {
                    title: "Center the Leaf",
                    description:
                      "Position the affected leaf in the center of the frame",
                  },
                  {
                    title: "Close-Up Shot",
                    description:
                      "Get close enough to capture details of the affected area",
                  },
                ].map((tip) => (
                  <div key={tip.title} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">{tip.title}</h4>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Detection;
