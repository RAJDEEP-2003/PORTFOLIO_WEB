// @flow strict

import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#2a3a7a] bg-gradient-to-br from-[#0d1224] via-[#11152c] to-[#0a0d37] p-6 transition-all duration-500 hover:border-[#16f2b3] hover:shadow-[0_0_40px_rgba(22,242,179,0.15)]">

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_right,rgba(22,242,179,0.12),transparent_40%)]"></div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {project.name}
          </h3>

          <p className="text-[#16f2b3] text-sm mt-1 flex items-center gap-2">
            <FaCode />
            {project.role}
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Description */}
      <p className="relative z-10 text-gray-300 leading-7 text-sm md:text-base mb-6">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <FaLayerGroup className="text-[#16f2b3]" />
          <span className="text-white font-semibold">
            Tech Stack
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tools?.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-[#141b34] border border-[#243b6b] text-[#16f2b3] hover:scale-105 transition-all"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-wrap gap-4">

        {project.code && (
          <Link
            href={project.code}
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#16f2b3] text-black font-semibold hover:scale-105 transition-all duration-300"
          >
            <FaGithub />
            GitHub
          </Link>
        )}

        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#16f2b3] text-[#16f2b3] hover:bg-[#16f2b3] hover:text-black transition-all duration-300"
          >
            <FaExternalLinkAlt />
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;