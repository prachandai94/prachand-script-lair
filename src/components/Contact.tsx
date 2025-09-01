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
    return <section id="contact" className="py-24 bg-background-secondary/30">
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
      </section>;
  }
  return <section id="contact" className="py-24 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            Get <span className="text-samurai-red brush-stroke">Connected</span>
          </h2>
          <div className="samurai-divider mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Ready to bring your story to life? Brands like WWE, Aazhol, Timezone and countless Directors & Producers trust us across the board!</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="paper rounded-2xl p-8 space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-text-primary">Name *</Label>
                <Input id="name" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} required className="bg-background-secondary/50 border-paper-border text-text-primary placeholder:text-text-muted focus:border-samurai-red" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-text-primary">Email *</Label>
                <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} required className="bg-background-secondary/50 border-paper-border text-text-primary placeholder:text-text-muted focus:border-samurai-red" placeholder="your@email.com" />
              </div>
            </div>

            {/* Company and Project Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-text-primary">Company/Organization</Label>
                <Input id="company" value={formData.company} onChange={e => handleInputChange("company", e.target.value)} className="bg-background-secondary/50 border-paper-border text-text-primary placeholder:text-text-muted focus:border-samurai-red" placeholder="Your company name" />
              </div>
              <div className="space-y-2">
                <Label className="text-text-primary">Project Type *</Label>
                <Select onValueChange={value => handleInputChange("projectType", value)}>
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
              <Textarea id="brief" value={formData.brief} onChange={e => handleInputChange("brief", e.target.value)} required rows={6} className="bg-background-secondary/50 border-paper-border text-text-primary placeholder:text-text-muted focus:border-samurai-red resize-none" placeholder="Tell us about your project: concept, genre, target audience, timeline, and any specific requirements..." />
            </div>

            {/* NDA Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="nda" checked={formData.nda} onCheckedChange={checked => handleInputChange("nda", checked as boolean)} className="border-paper-border data-[state=checked]:bg-samurai-red data-[state=checked]:border-samurai-red" />
              <Label htmlFor="nda" className="text-text-secondary text-sm">
                I would like to discuss this project under NDA
              </Label>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="samurai" size="lg" className="w-full group h-12 text-base">
              Send Project Brief
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.link/n0sna9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 h-12 text-base font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              Chat on WhatsApp
            </a>

            <p className="text-center text-text-muted text-sm">
              We typically respond within 24 hours. All project discussions are confidential.
            </p>
          </form>
        </div>
      </div>
    </section>;
};