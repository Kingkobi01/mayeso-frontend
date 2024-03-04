import React from "react";
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

function TeamMember(member) {
  return (
    <div class="w-full lg:max-w-md rounded overflow-hidden shadow-gray-600 shadow bg-secondary hover:shadow-lg hover:shadow-gray-600 duration-300 cursor-pointer">
      <img
        class="w-full h-64 object-cover object-center"
        src={member.img}
        alt={member.name}
      />
      <div class="px-6 py-4">
        <div class="font-semi-bold text-xl mb-2">{member.name}</div>
        <p class="text-primary text-base">{member.role}</p>
        <p className="text-sm text-gray-700">{member.place}</p>
      </div>
      <div class="p-2 flex justify-evenly">
        <a target="_blank" href={member.x}>
          <span class="rounded-full inline-block bg-gray-200 p-2 text-sm font-semibold text-gray-700 mr-2 mb-2 duration-300 hover:text-white hover:bg-primary">
            <FaTwitterSquare size={20} />
          </span>
        </a>
        <a target="_blank" href={member.gitHub}>
          <span class="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2 duration-300 hover:text-white hover:bg-primary">
            <FaGithubSquare size={20} />
          </span>
        </a>
        <a target="_blank" href={member.linkedIn}>
          <span class="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2 duration-300 hover:text-white hover:bg-primary">
            <FaLinkedinIn size={20} />
          </span>
        </a>
      </div>
    </div>
  );
}

export default TeamMember;
