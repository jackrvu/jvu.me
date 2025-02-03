import React from 'react';

// Define the structure for a project
interface Project {
  name: string;
  description: string;
  links: {
    github?: string;
    site?: string;
    paper?: string;
    prezi?: string;
    writeup?: string;
  };
}

// Your projects data
const projects: Project[] = [
  {
    name: "problem solving initiative (PSI)",
    description: "a gamified math problem solving platform.",
    links: { 
        github: "https://github.com/ecao77/psolving",
        site: "ecao77.github.io/psolving/"
    }
  },
  {
    name: "metachronal propulsion",
    description: "a paper on the efficiency of metachronal movement. accepted to Fluids in dec 2023.",
    links: {
      paper: "https://www.mdpi.com/2311-5521/9/1/2"
    }
  },
  {
    name: "cordgrass",
    description: "a paper on the wave-reducing ability of cordgrass meadows. submitted to Sustainability in oct 2024.",
    links: { 
      github: "https://github.com/ecao77/cgrass",
      paper: "https://www.mdpi.com/2311-5521/9/1/2"
    }
  },
  {
    name: "mav hub",
    description: "school app that displays schedule, lunch menu, and house points. 110000+ uses/month.",
    links: { 
        github: "https://github.com/SMPhoenicx/The-Mav-Hub"
    }
  },
  {
    name: "pds projects",
    description: "projects from my 11th grade Programming Data Structures (and Algorithms) class.",
    links: { 
        github: "https://github.com/ecao77/pds-projects"
    }
  },
  {
    name: "gradient descent",
    description: "implementation and visualization of the gradient descent algorithm. presented in multivariable class and ross '24.",
    links: {
        github: "https://github.com/Nobbertins/MVCFinal",
        prezi: "https://fragrant-lake-8762.ecao787.workers.dev"
    }
  }
];

const ProjectsList: React.FC = () => {
    return (
      <div className="space-y-2">
        {projects.map((project, index) => (
          <div key={index} className="pb-2">
            <div className="flex flex-wrap items-center gap-2">
              <p>{project.name}</p>
              <div className="flex space-x-1">
                {project.links.github && (
                  <a href={project.links.github} className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">[GitHub]</a>
                )}
                {project.links.site && (
                  <a href={project.links.site} className="hover:text-purple-500" target="_blank" rel="noopener noreferrer">[Site]</a>
                )}
                {project.links.paper && (
                  <a href={project.links.paper} className="hover:text-orange-500" target="_blank" rel="noopener noreferrer">[Paper]</a>
                )}
                {project.links.prezi && (
                  <a href={project.links.prezi} className="hover:text-green-500" target="_blank" rel="noopener noreferrer">[Prezi]</a>
                )}
              </div>
            </div>
            <p className="text-gray-600 mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    );
};

export default ProjectsList;