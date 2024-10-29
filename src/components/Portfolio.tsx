import { getProjects } from "../assets/companyData";

export default function Portfolio() {
  const projects = getProjects();
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Portfolio</h3>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded shadow-md overflow-hidden">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Project 1"
                  className="w-full"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
