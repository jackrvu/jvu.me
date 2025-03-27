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
    name: "road to grpo",
    description: "implementing a progression of RL algorithms from scratch, starting w/ basic policy gradients, progressing onto PPO, actor-critic, and culminating in a GRPO implementation.",
    links: {}
  },
  {
    name: "medft",
    description: "improving neural machine translation in the medical domain by supervised fine-tuning on a medical translation dataset",
    links: {}
  },
  {
    name: "ccloth",
    description: "a real-time cloth simulation implementation using position based dynamics (PBD), featuring wind forces, sphere collision, and stretch visualization. based on Müller et al.'s 2006 paper on PBD, done in raylib/c.",
    links: {}
  },
  {
    name: "complex analysis viz",
    description: "some visualizations in raylib/c for a complex analysis course. made originally for conformal mappings, but extended to bilinear maps, domain coloring, and taylor/laurent vizs.",
    links: {}
  },
  {
    name: "tensorviz",
    description: "visualizing tensors in three.js, including tensor slicing, tensor-matrix products, tensor contraction, and tensor decomps (tucker and canonical-polyadic)",
    links: {}
  },
  {
    name: "pdeviz",
    description: "visualizing pde solutions in raylib/c. currently only includes 2d wave, but expanding soon!",
    links: {}
  },
  {
    name: "opentuber",
    description: "mediapipe-driven vtuber implementation with three.js and vrm models. basically open source and lightweight vtuber studio",
    links: {}
  },
  {
    name: "metachronal propulsion",
    description: "a paper on the efficiency of metachronal movement. accepted to Fluids in dec 2023.",
    links: {
      paper: "https://www.mdpi.com/2311-5521/9/1/2"
    }
  },
  {
    name: "problem solving initiative (PSI)",
    description: "a gamified math problem solving platform.",
    links: { 
        github: "https://github.com/ecao77/psolving",
        site: "ecao77.github.io/psolving/"
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
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index} className="pb-2">
            <h3 className="text-3xs lg:text-2xs font-bold">{project.name}</h3>
            <p className="text-3xs lg:text-2xs text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-3xs lg:text-2xs">
              {project.links.github && (
                <a href={project.links.github} className="text-blue-600 hover:text-blue-800 transition-colors duration-200" target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              {project.links.site && (
                <a href={project.links.site} className="text-purple-600 hover:text-purple-800 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Website</a>
              )}
              {project.links.paper && (
                <a href={project.links.paper} className="text-orange-600 hover:text-orange-800 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Paper</a>
              )}
              {project.links.prezi && (
                <a href={project.links.prezi} className="text-green-600 hover:text-green-800 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Prezi</a>
              )}
              {project.links.writeup && (
                <a href={project.links.writeup} className="text-pink-600 hover:text-pink-800 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Writeup</a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
};

export default ProjectsList;