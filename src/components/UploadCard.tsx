import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Search, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const UploadCard = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
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
  };

  const clearFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) {
      toast.error("Please select an image first");
      return;
    }
    toast.success("Analysis started! This feature requires backend integration.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-card rounded-2xl p-8 shadow-xl border border-border max-w-md w-full"
    >
      <h3 className="font-display font-bold text-2xl text-foreground text-center mb-6">
        Upload Image
      </h3>

      <div
        className={`relative border-2 border-dashed rounded-xl p-6 transition-all cursor-pointer ${
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
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearFile();
              }}
              className="absolute top-2 right-2 p-1.5 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="p-4 rounded-full bg-secondary">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground mb-1">
                Drop your image here
              </p>
              <p className="text-sm text-muted-foreground">
                or click to browse
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
        disabled={!selectedFile}
      >
        <Search className="h-5 w-5 mr-2" />
        Analyze Image
      </Button>

      <p className="text-center text-xs text-muted-foreground mt-4">
        Supported: JPG, JPEG, PNG • Max: 8MB
      </p>
    </motion.div>
  );
};

export default UploadCard;
