const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
];

exports.getSkills = (req, res) => {
  res.json(skills);
};
