import { Download } from "lucide-react";

export const ScriptDownload = () => {
  return (
    <section className="py-6 bg-samurai-red/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-text-primary mb-4">
            Want to read a script we wrote? Here's something released!
          </p>
          <button className="inline-flex items-center gap-2 bg-samurai-red hover:bg-samurai-red/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            <Download size={20} />
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
};