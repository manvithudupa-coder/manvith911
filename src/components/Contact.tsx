import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-accent">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-all hover:shadow-elevated group">
            <div className="mb-4 inline-block p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:contact@manvith.dev"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              contact@manvith.dev
            </a>
          </Card>

          <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-all hover:shadow-elevated group">
            <div className="mb-4 inline-block p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/Manvith911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              @Manvith911
            </a>
          </Card>

          <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-all hover:shadow-elevated group">
            <div className="mb-4 inline-block p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">India</p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to learn and collaborate with fellow developers.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:contact@manvith.dev">
                <Mail className="mr-2 h-5 w-5" />
                Send a Message
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
