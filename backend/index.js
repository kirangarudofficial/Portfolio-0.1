const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample data - in production replace with DB calls

const projects = [
  {
    id: 1,
    title: 'CI/CD Pipeline Automation',
    description: 'Automated software deployment pipeline using Jenkins and Docker.',
    techStack: ['Jenkins', 'Docker', 'AWS'],
    github: 'https://github.com/yourusername/cicd-pipeline',
    live: 'https://example.com/cicd-pipeline'
  },
  {
    id: 2,
    title: 'Kubernetes Cluster Setup',
    description: 'Provisioned Kubernetes cluster on AWS with Terraform.',
    techStack: ['Kubernetes', 'Terraform', 'AWS'],
    github: 'https://github.com/yourusername/k8s-cluster-setup',
    live: 'https://example.com/k8s-cluster-setup'
  }
];

// Similarly skills, resume, certifications data
const skills = [
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
];

const resume = {
  education: [
    {
      year: '2015 - 2019',
      school: 'Bachelor of Science in Computer Science',
      institution: 'University XYZ',
      description: 'Focus on distributed systems and cloud computing.'
    }
  ],
  experience: [
    {
      year: '2020 - Present',
      role: 'Cloud & DevOps Engineer',
      company: 'Tech Company',
      description: 'Managed cloud infrastructure and optimized CI/CD pipelines.'
    }
  ]
};

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/AWS_Certified_Solutions_Architect_Official_Logo.svg'
  },
  {
    name: 'Certified Kubernetes Administrator',
    logo: 'https://www.cncf.io/wp-content/uploads/2020/08/certified_kubernetes_administrator_logo.png'
  }
];

// API Endpoints

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.get('/api/resume', (req, res) => {
  res.json(resume);
});

app.get('/api/certifications', (req, res) => {
  res.json(certifications);
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  // Configure nodemailer with dummy/test account or real SMTP
  // Here using Ethereal email test account:
  try {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    let info = await transporter.sendMail({
      from: `"Portfolio Contact" <${email}>`,
      to: 'your.email@example.com',  // your email address
      subject: `Contact from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.json({ message: 'Message sent successfully!', previewUrl: nodemailer.getTestMessageUrl(info) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
