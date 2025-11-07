export default function Education() {
  const education = [
    {
      degree: "Master of Science, Bioinformatics",
      school: "Northeastern University, USA",
      details:
        "Courses: Biochemistry, Molecular Biology, Programming, Database Management, Proteomics, Imaging, Ethics",
    },
    {
      degree: "Bachelor of Engineering, Biomedical Engineering",
      school: "University of Mumbai, India",
      details: "Courses: Medical Instrumentation, Anatomy, Embedded Systems, Hospital Management",
    },
    {
      degree: "MBA Certification",
      school: "Rady School of Management, UC San Diego",
      details: "Courses: Business Strategy, Innovation, Venture Creation, Leadership",
    },
  ]

  return (
    <section className="border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">{item.degree}</h3>
              <p className="text-sm text-accent font-medium mb-3">{item.school}</p>
              <p className="text-sm text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
