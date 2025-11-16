import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      level: 85,
      color: "hsl(12, 100%, 50%)",
    },
    {
      name: "CSS3",
      level: 80,
      color: "hsl(217, 91%, 60%)",
    },
    {
      name: "JavaScript",
      level: 75,
      color: "hsl(48, 100%, 50%)",
    },
    {
      name: "React",
      level: 70,
      color: "hsl(189, 94%, 43%)",
    },
    {
      name: "Web Scraping",
      level: 65,
      color: "hsl(142, 71%, 45%)",
    },
    {
      name: "UI/UX Design",
      level: 60,
      color: "hsl(280, 100%, 60%)",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with and continue to learn
          </p>
        </div>

        {/* Skills List */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Also familiar with:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Git", "GitHub", "VS Code", "Responsive Design", "REST APIs", "Node.js"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
