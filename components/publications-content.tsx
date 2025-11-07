export default function PublicationsContent() {
  return (
    <section className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-16">
        {/* Peer-Reviewed Publications */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Peer-Reviewed Publications</h2>
          <div className="space-y-6">
            {[
              {
                title: "AI-Driven Integration of Single-cell Genomic Knowledge for Diabetes Research",
                authors: "Kudtarkar P et al.",
                journal: "AI in Molecular Biology, Keystone Symposia (2025)",
              },
              {
                title: "An integrated map of cell type-specific gene expression in pancreatic islets",
                authors:
                  "Elgamal, Ruth; Kudtarkar, Parul; Melton, Rebecca; Mummey, Hannah; Benaglio, Paola; Okino, Mei-Lin; Gaulton, Kyle J",
                journal: "Diabetes (2023)",
              },
              {
                title: "Leveraging type 1 diabetes human genetic and genomic data in the T1D Knowledge Portal",
                authors:
                  "Kudtarkar, Parul; Costanzo, Maria; Sun, Ying; Jang, Dongkeun; Koesterer, Ryan; Mychaleckyj, Josyf C; Nayak, Uma; Onengut-Gumuscu, Suna; Rich, Stephen S; Flannick, Jason A",
                journal: "PLoS Biology (2023)",
              },
              {
                title: "Echinobase: an expanding resource for echinoderm genomic information",
                authors: "Kudtarkar, Parul; Cameron, R. Andrew",
                journal: "Database: The Journal of Biological Databases and Curation (2017)",
              },
              {
                title: "Do echinoderm genomes measure up?",
                authors: "Cameron, R Andrew; Kudtarkar, Parul; Gordon, Susan M; Worley, Kim C; Gibbs, Richard A",
                journal: "Marine genomics (2015)",
              },
              {
                title: "Cost-effective cloud computing: a case study using the comparative genomics tool, roundup",
                authors: "Kudtarkar, Parul; DeLuca, Todd F; Fusaro, Vincent A; Tonellato, Peter J; Wall, Dennis P",
                journal: "Evolutionary Bioinformatics (2010)",
              },
              {
                title: "Cloud computing for comparative genomics",
                authors: "Wall, Dennis P; Kudtarkar, Parul; Fusaro, Vincent A; Pivovarov, Rimma; Patil, Prasad; Tonellato, Peter J",
                journal: "BMC bioinformatics (2010)",
              },
              {
                title: "Genetic association and machine learning improves discovery and prediction of type 1 diabetes",
                authors: "McGrail, Carolyn; Kudtarkar, Parul; et al.",
                journal: "medRxiv (2024)",
              },
              {
                title: "Single cell multiome profiling of pancreatic islets reveals physiological changes in cell type-specific regulation associated with diabetes risk",
                authors: "Mummey, Hannah M; Kudtarkar, Parul; et al.",
                journal: "bioRxiv (2024)",
              },
              {
                title: "Sex-specific regulatory architecture of pancreatic islets from subjects with and without type 2 diabetes",
                authors: "Qadir, Mirza Muhammad Fahd; Kudtarkar, Parul; et al.",
                journal: "The EMBO Journal (2024)",
              },
              {
                title: "The Type 2 Diabetes Knowledge Portal: An open access genetic resource dedicated to type 2 diabetes and related traits",
                authors: "Costanzo, Maria C; Kudtarkar, Parul; et al.",
                journal: "Cell metabolism (2023)",
              },
              {
                title: "Cardiovascular disease knowledge portal: a community resource for cardiovascular disease research",
                authors: "Costanzo, Maria C; Kudtarkar, Parul; et al.",
                journal: "Circulation: Genomic and Precision Medicine (2023)",
              },
              {
                title: "Single-cell chromatin accessibility identifies pancreatic islet cell type– and state-specific regulatory programs of diabetes risk.",
                authors: "Chiou, Joshua; Kudtarkar, Parul; et al.",
                journal: "Nature Genetics (2021)",
              },
              {
                title: "Single-cell multiomic profiling of human lungs reveals cell-type-specific and age-dynamic control of SARS-CoV2 host genes",
                authors: "Wang, Allen; Kudtarkar, Parul; et al.",
                journal: "Elife (2020)",
              },
              {
                title: "Developmental effector gene regulation: Multiplexed strategies for functional analysis",
                authors: "Wang, Lijun; Kudtarkar, Parul; et al.",
                journal: "Developmental biology (2019)",
              },
            ].map((pub, index) => (
              <div key={index} className="pb-6 border-b border-border last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                <p className="text-sm text-accent font-medium">{pub.journal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Invited Talks */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Invited Talks</h2>
          <div className="space-y-4">
            {[
              { title: "AMP CMD Portals", venue: "AMP CMD Parliament Meeting (2025)" },
              { title: "Single Cell Maps and Analysis Tools in CMDGA", venue: "AMP CMD Parliament Meeting (2024)" },
              {
                title: "Gene Expression Integration and Representation in CMDGA/KP",
                venue: "AMP CMD Parliament Meeting (2023)",
              },
              {
                title: "Representing Genomic Perturbation Studies in CMDGA",
                venue: "AMP CMD Leadership Conference (2022)",
              },
            ].map((talk, index) => (
              <div key={index} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                <h3 className="font-semibold mb-1">{talk.title}</h3>
                <p className="text-sm text-muted-foreground">{talk.venue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
