const projects = [
  {
    title: "Netflix GPT",
    description: "React + Redux Toolkit + Firebase",
    link: "https://netflixgpt-2123.netlify.app/",
  },
  {
    title: "YouTube Clone",
    description: "React + Rapid API",
    link: "https://youtube-clone12345.netlify.app/",
  },
];

exports.getProjects = (req, res) => {
  res.json(projects);
};
