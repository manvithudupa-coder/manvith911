import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Crafting responsive and modern websites with HTML, CSS, and JavaScript",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices in web development",
    },
    {
      icon: Rocket,
      title: "Project Focused",
      description: "Building real-world applications to solve problems and gain experience",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate student from India on a journey to master web development
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a web development enthusiast currently learning and building projects
              to sharpen my skills. My journey started with the fundamentals of HTML,
              CSS, and JavaScript, and I'm constantly pushing myself to create better,
              more innovative web experiences.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              When I'm not coding, you'll find me exploring new web technologies,
              watching development tutorials, or brainstorming ideas for my next project.
              I believe in learning by doing, which is why I focus on building
              real-world applications.
            </p>
          </div>

          {/* Stats/Info */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-sm text-muted-foreground">Core Technologies</div>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">1</div>
              <div className="text-sm text-muted-foreground">GitHub Stars</div>
            </Card>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-elevated group"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <highlight.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
