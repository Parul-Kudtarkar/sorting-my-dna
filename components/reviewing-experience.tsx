export default function ReviewingExperience() {
  const reviewing = [
    {
      title: "Editorial Board",
      content: "Database: The Journal of Biological Databases and Curation",
    },
    {
      title: "Journals Reviewed For",
      content:
        "American Journal of Human Genetics, Bioinformatics, Evolutionary Bioinformatics, BMC Bioinformatics, PLOS Computational Biology, Journal of Endocrinology, Faculty of 1000, Diabetes",
    },
    {
      title: "Conference Jury",
      content: "Intel International Science and Engineering Fair (Computational Biology and Bioinformatics category), Chen Institute Symposium for AI Accelerated Science",
    },
  ]

  return (
    <section className="border-t border-border bg-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Reviewing Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewing.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:border-accent transition-colors"
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
