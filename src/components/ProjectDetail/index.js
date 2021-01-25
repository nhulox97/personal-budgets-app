import React from 'react';

const ProjectDetail = ({ projectTitle, projectDesc }) => (
  <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around">
    <div className="flex items-start p-2">
       <p className="font-mono text-bold text-5xl">{projectTitle}</p>
    </div>
    <div className="flex items-start p-2">
        <p className="italic text-lg">{projectDesc}</p>
    </div>
  </div>
);

export default ProjectDetail;
