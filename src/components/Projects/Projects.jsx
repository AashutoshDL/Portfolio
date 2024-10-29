import React from 'react';

const Projects = () => {
  // Sample project data
  const projectData = [
    {
      title: 'Ev Repair',
      description: 'An Ev Repair Website made for advert',
      image: '/public/image1.jpg',
      link:'',
      id: 1,
    },
    {
      title: 'Bhasalaya',
      description: 'This is an web application for learning Nepali, Samajik and Sanskrit',
      image: '/public/image2.jpg',
      link:'',
      id: 2,
    },
    {
      title: 'Medisys',
      description: 'Healt Tracking Application (Web Application)',
      image: '/public/image2.jpg',
      link:'',
      id: 3,
    },
    {
      title: 'Weather Application',
      description: 'This is the web application using React Js and OpenWeatherAPI',
      image: '/public/image2.jpg',
      link:'',
      id: 4,
    },
    {
      title: 'VROOM',
      description: 'This is the Car Rental Web Application',
      image: '/public/image2.jpg',
      link:'',
      id: 5,
    },
    {
      title: 'GreenRides',
      description: 'This is an Ev based delivery application',
      image: '/public/image2.jpg',
      link:'',
      id: 6,
    },    
    {
      title: 'Project Management System',
      description: 'Project Management System or Software for small offices and businesses',
      image: '/public/image2.jpg',
      link:'',
      id: 7,
    },
  ];

  return (
    <div className="bg-background text-white py-16">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 pb-32 ">
        {projectData.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg mb-4 text-center">{project.description}</p>
            <div className="relative w-full mb-4">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 text-center"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
