import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, CheckCircle } from "lucide-react";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    brief: "",
    nda: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-background-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="paper rounded-2xl p-12">
              <CheckCircle className="w-16 h-16 text-samurai-red mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold mb-4 text-text-primary brush-stroke">
                Pitch Received!
              </h2>
              <p className="text-text-secondary mb-6">
                Thanks for reaching out! Our team will review your project brief and 
                get back to you within 24 hours. We're excited to explore your story together.
              </p>
              <p className="text-text-muted text-sm">
                Keep an eye on your inbox – creative possibilities incoming.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            Pitch Your <span className="text-samurai-red brush-stroke">Project</span>
          </h2>
          <div className="samurai-divider mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ready to bring your story to life? Share your vision with us and 
            let's start crafting something extraordinary together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="paper rounded-2xl p-8 space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-text-primary">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="bg-background-secondary/50 border-paper-border text-text-primary placeholder:text-text-muted focus:border-samurai-red"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-text-primary">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="bg-background-secondary/50 border-paper-border text-text-primary placeholder:text-text-muted focus:border-samurai-red"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Company and Project Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-text-primary">Company/Organization</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="bg-background-secondary/50 border-paper-border text-text-primary placeholder:text-text-muted focus:border-samurai-red"
                  placeholder="Your company name"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-text-primary">Project Type *</Label>
                <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger className="bg-background-secondary/50 border-paper-border text-text-primary focus:border-samurai-red">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-paper-border">
                    <SelectItem value="feature-film">Feature Film</SelectItem>
                    <SelectItem value="tv-series">TV Series/Pilot</SelectItem>
                    <SelectItem value="digital-content">Digital/Short Content</SelectItem>
                    <SelectItem value="advertising">Advertising/Brand</SelectItem>
                    <SelectItem value="script-doctoring">Script Doctoring</SelectItem>
                    <SelectItem value="pitch-deck">Pitch Deck/Treatment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Brief */}
            <div className="space-y-2">
              <Label htmlFor="brief" className="text-text-primary">Project Brief *</Label>
              <Textarea
                id="brief"
                value={formData.brief}
                onChange={(e) => handleInputChange("brief", e.target.value)}
                required
                rows={6}
                className="bg-background-secondary/50 border-paper-border text-text-primary placeholder:text-text-muted focus:border-samurai-red resize-none"
                placeholder="Tell us about your project: concept, genre, target audience, timeline, and any specific requirements..."
              />
            </div>

            {/* NDA Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="nda"
                checked={formData.nda}
                onCheckedChange={(checked) => handleInputChange("nda", checked as boolean)}
                className="border-paper-border data-[state=checked]:bg-samurai-red data-[state=checked]:border-samurai-red"
              />
              <Label htmlFor="nda" className="text-text-secondary text-sm">
                I would like to discuss this project under NDA
              </Label>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              variant="samurai" 
              size="lg" 
              className="w-full group h-12 text-base"
            >
              Send Project Brief
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-center text-text-muted text-sm">
              We typically respond within 24 hours. All project discussions are confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};