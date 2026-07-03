import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import { IMAGES } from "../data/images";

const projectData: Record<string, { title: string; service: string; industry: string; client: string }> = {
  "1": { title: "Finance Management System", service: "WEB APP DEVELOPMENT", industry: "Enterprise Software", client: "FinCore Solutions" },
  "2": { title: "SaaS Dashboard UI", service: "UI/UX DESIGN", industry: "SaaS", client: "CloudMetrics Inc." },
  "3": { title: "Crypto Trading Platform", service: "WEB APP DEVELOPMENT", industry: "Fintech", client: "CryptoVault" },
  "4": { title: "E-commerce Redesign", service: "WEB DEVELOPMENT", industry: "E-commerce", client: "ShopNova" },
  "5": { title: "Health & Fitness App", service: "MOBILE APP DEVELOPMENT", industry: "Healthcare", client: "HealthSync" },
  "6": { title: "Real Estate Portal", service: "WEBFLOW DEVELOPMENT", industry: "Real Estate", client: "PropertyHub" },
  "7": { title: "Banking App Interaction", service: "MOBILE APP DEVELOPMENT", industry: "Banking", client: "NeoBank" },
  "8": { title: "Analytics Dashboard", service: "WEB APP DEVELOPMENT", industry: "Analytics", client: "DataPulse" },
};

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projectData[id || "1"] || projectData["1"];
  const publishedDate = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <main>
      {/* Cover */}
      <section className="py-25 bg-black rounded-b-4xl">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-3xl sm:text-5xl font-normal -tracking-[2.88px] mb-6">{project.title}</h2>
          <img src={IMAGES.projectCovers[0]} alt={project.title} className="rounded-2xl w-full h-64 sm:h-96 object-cover" />
        </div>
      </section>

      {/* Details */}
      <section className="py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between gap-10 flex-col lg:flex-row">
            <div className="lg:w-5/12">
              <h3 className="text-2xl font-medium text-black -tracking-[0.96px] mb-3">Project Description</h3>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px] mb-5">
                Building a modern {project.title.toLowerCase()} requires clarity, precision, and seamless data flow. This platform helps teams monitor operations, automate workflows, and gain real-time insights without technical complexity.
              </p>
              <p className="text-lg text-gray-700 leading-7 -tracking-[0.2px]">
                It improves operational efficiency, reduces errors, and enables businesses to make informed decisions—fast.
              </p>
            </div>
            <div className="lg:w-5/12">
              <div className="grid grid-cols-2 gap-10 sm:gap-20">
                <div>
                  <h4 className="text-lg font-medium text-black -tracking-[0.2px] mb-1">Published</h4>
                  <span className="text-lg font-mono text-black">{publishedDate}</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black -tracking-[0.2px] mb-1">Services</h4>
                  <span className="text-lg font-mono text-black">{project.service}</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black -tracking-[0.2px] mb-1">Industry</h4>
                  <span className="text-lg font-mono text-black">{project.industry}</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black -tracking-[0.2px] mb-1">Client</h4>
                  <span className="text-lg font-mono text-black">{project.client}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Image */}
      <div className="max-w-[1440px] mx-auto px-7.5">
        <img src={IMAGES.projectCovers[1]} alt="Project content" className="w-full rounded-[20px] h-64 sm:h-96 object-cover" />
      </div>

      {/* Challenges */}
      <section className="py-12 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="sm:flex-row flex-col gap-5 flex">
            <div className="sm:w-1/2">
              <h3 className="font-medium text-2xl text-black">Challenges</h3>
            </div>
            <div className="sm:w-1/2 space-y-5">
              <p className="text-lg text-black leading-7 -tracking-[0.2px]">
                The project faced several major challenges. Managing large-scale operations meant handling thousands of data points every day, which the existing system could not efficiently process.
              </p>
              <p className="text-lg text-black leading-7 -tracking-[0.2px]">
                Their legacy tools slowed down reporting, often causing delays and data inconsistencies. Additionally, teams had no centralized dashboard to manage approvals, forecasting, or evaluations. These issues highlighted the need for a scalable and intuitive platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="sm:flex-row flex-col gap-5 flex">
            <div className="sm:w-1/2">
              <h3 className="font-medium text-2xl text-black">Solutions</h3>
            </div>
            <div className="sm:w-1/2 space-y-5">
              <p className="text-lg text-black leading-7 -tracking-[0.2px]">
                To solve these challenges, I designed an intelligent dashboard powered by real-time data insights and predictive trends, enabling teams to access instant performance metrics.
              </p>
              <p className="text-lg text-black leading-7 -tracking-[0.2px]">
                I streamlined the entire workflow, including approvals, forecasting, and audit trails, making operations faster and more transparent. I developed a modular UI so the system can easily grow as new tools or features are required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <div className="max-w-[1440px] mx-auto px-7.5 mb-12 sm:mb-25">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          <img src={IMAGES.projects[0]} alt="Gallery 1" className="w-full rounded-[20px] h-64 object-cover" />
          <img src={IMAGES.projects[1]} alt="Gallery 2" className="w-full rounded-[20px] h-64 object-cover" />
        </div>
      </div>

      {/* Results */}
      <section className="py-12 sm:py-25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="sm:flex-row flex-col gap-5 flex">
            <div className="sm:w-1/2">
              <h3 className="font-medium text-2xl text-black">Results</h3>
            </div>
            <div className="sm:w-1/2 space-y-5">
              <p className="text-lg text-black leading-7 -tracking-[0.2px]">
                The upgraded platform significantly improved operational efficiency. Manual reporting time decreased by nearly 60%, and team productivity increased by 40% due to simplified workflows and automation.
              </p>
              <p className="text-lg text-black leading-7 -tracking-[0.2px]">
                The interface now delivers a seamless, consistent experience across desktop and tablet devices. Today, the platform supports thousands of daily transactions without downtime, ensuring reliability at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Projects */}
      <section className="lg:pt-30">
        <div className="py-25 bg-black rounded-t-4xl">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-white text-3xl sm:text-5xl font-normal -tracking-[2.88px] mb-16">
              Similar <span className="italic">Projects you may like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {[
                { id: 1, title: "Finance Management System", type: "WEB APP", image: IMAGES.projects[0] },
                { id: 2, title: "SaaS Dashboard UI", type: "WEB APP", image: IMAGES.projects[1] },
              ].map(p => (
                <article key={p.id} className="p-6 rounded-[20px] border border-[#1F1F1F] bg-neutral-950 group">
                  <h3 className="text-lg text-white -tracking-[0.2px] mb-6">
                    <Link href={`/portfolio/${p.id}`} className="hover:text-gray-300 transition">{p.title}</Link>
                  </h3>
                  <div className="flex py-6 text-white text-base justify-between font-mono mb-6">
                    <span>{p.type}</span>
                    <span>JAN {new Date().getFullYear()}</span>
                  </div>
                  <Link href={`/portfolio/${p.id}`} className="block overflow-hidden rounded-2xl">
                    <img src={p.image} alt={p.title} className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
                  </Link>
                </article>
              ))}
            </div>
            <Link href="/portfolio" className="btn btn-secondary group">
              <span>Explore All Projects</span>
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
