import React from 'react';
import { Users, Cloud, Database, Brain, Zap, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#hero" className="font-Inter text-xl font-bold text-neutral-800">
                DevOps Portfolio
              </a>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="font-Inter text-neutral-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">Home</a>
              <a href="#about" className="font-Inter text-neutral-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">About</a>
              <a href="#services" className="font-Inter text-neutral-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">Services</a>
              <a href="#ai-tools" className="font-Inter text-neutral-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">AI Tools</a>
              <a href="#data-connectivity" className="font-Inter text-neutral-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">Data Solutions</a>
              <a href="#projects" className="font-Inter text-neutral-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">Projects</a>
              <a href="#contact" className="font-Inter text-neutral-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">Contact</a>
            </div>

            <div className="md:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-blue-600 hover:bg-gray-100">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Professional Clean Design */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                DevOps Engineer
                <span className="block text-blue-600">& Cloud Architect</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Specializing in AWS Cloud Infrastructure, CI/CD Automation, and Scalable System Design. 
                Building the future of cloud-native applications.
              </p>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                View Projects
              </a>
              <a href="#contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                Get In Touch
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">AWS Certified</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Terraform</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Kubernetes</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">CI/CD</span>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional DevOps workspace"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Tech Icons - Static */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <Database className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate DevOps Engineer with expertise in cloud infrastructure, automation, and modern development practices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
              <p className="text-gray-600 text-lg">
                As a dedicated DevOps Engineer, I specialize in bridging the gap between development and operations 
                through cutting-edge cloud technologies, automation tools, and scalable infrastructure design.
              </p>
              <p className="text-gray-600">
                My expertise spans across AWS cloud services, Infrastructure as Code, CI/CD pipelines, and container 
                orchestration. I'm passionate about creating efficient, reliable, and secure systems that enable 
                teams to deploy faster and with confidence.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Cloud Platforms</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• AWS Services</li>
                    <li>• Azure DevOps</li>
                    <li>• Google Cloud</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">DevOps Tools</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Docker & Kubernetes</li>
                    <li>• Terraform & Ansible</li>
                    <li>• GitHub Actions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="DevOps professional workspace"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive DevOps solutions to accelerate your development lifecycle
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Scalable AWS infrastructure design and implementation with Infrastructure as Code principles.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AWS Architecture Design</li>
                <li>• Terraform & CloudFormation</li>
                <li>• Auto-scaling Solutions</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">CI/CD Automation</h3>
              <p className="text-gray-600 mb-6">
                Automated deployment pipelines that reduce deployment time and increase reliability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• GitHub Actions Setup</li>
                <li>• Pipeline Optimization</li>
                <li>• Automated Testing</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps Consulting</h3>
              <p className="text-gray-600 mb-6">
                Strategic guidance to transform your development and operations practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Process Optimization</li>
                <li>• Tool Selection</li>
                <li>• Team Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="ai-tools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge AI technologies to accelerate development and optimize workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ChatGPT Integration</h3>
              <p className="text-gray-600 text-sm mb-4">AI-powered code assistance and documentation generation</p>
              <div className="text-xs text-green-600 font-medium">Code Generation • Documentation • Debugging</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bolt AI</h3>
              <p className="text-gray-600 text-sm mb-4">Rapid application development with AI-powered scaffolding</p>
              <div className="text-xs text-blue-600 font-medium">Project Setup • Template Generation • Automation</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">GitHub Copilot</h3>
              <p className="text-gray-600 text-sm mb-4">AI pair programming for enhanced productivity</p>
              <div className="text-xs text-purple-600 font-medium">Code Completion • Suggestions • Best Practices</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AWS CodeWhisperer</h3>
              <p className="text-gray-600 text-sm mb-4">Cloud-native AI coding assistant for AWS services</p>
              <div className="text-xs text-orange-600 font-medium">AWS Integration • Security Scanning • Optimization</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">AI-Enhanced Workflow Technology</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Integrating AI tools into DevOps pipelines to automate code reviews, generate infrastructure templates, 
              and optimize deployment strategies. This approach reduces development time by 40% while maintaining high code quality.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-semibold">Smart Code Review</div>
                <div className="text-gray-400">AI-powered analysis</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-semibold">Auto Documentation</div>
                <div className="text-gray-400">Generated docs</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-semibold">Intelligent Monitoring</div>
                <div className="text-gray-400">Predictive alerts</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-semibold">Deployment Optimization</div>
                <div className="text-gray-400">AI-driven strategies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Connectivity Section */}
      <section id="data-connectivity" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data Connectivity Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Robust data pipeline architecture and seamless integration across multiple data sources
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Data Integration</h3>
              <p className="text-gray-600 mb-6">
                Building scalable data pipelines that connect diverse data sources, ensure data quality, 
                and enable real-time analytics across your organization.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Data Streaming</h4>
                    <p className="text-gray-600 text-sm">Apache Kafka, AWS Kinesis, and event-driven architectures</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">API Gateway Management</h4>
                    <p className="text-gray-600 text-sm">Secure and scalable API connectivity with rate limiting and monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Database Orchestration</h4>
                    <p className="text-gray-600 text-sm">Multi-database connectivity with automated failover and replication</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Data connectivity visualization"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Database className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Database Technologies</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">PostgreSQL</span>
                  <span className="text-blue-600 font-medium">Expert</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">MongoDB</span>
                  <span className="text-green-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Redis</span>
                  <span className="text-purple-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">DynamoDB</span>
                  <span className="text-orange-600 font-medium">Expert</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Globe className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">API & Integration</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">REST APIs</span>
                  <span className="text-blue-600 font-medium">Expert</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GraphQL</span>
                  <span className="text-green-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WebSocket</span>
                  <span className="text-purple-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">gRPC</span>
                  <span className="text-orange-600 font-medium">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Zap className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Data Pipeline Tools</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Apache Kafka</span>
                  <span className="text-blue-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AWS Kinesis</span>
                  <span className="text-green-600 font-medium">Expert</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Apache Airflow</span>
                  <span className="text-purple-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AWS Glue</span>
                  <span className="text-orange-600 font-medium">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing real-world DevOps implementations and cloud solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="AWS Serverless Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AWS Serverless Portfolio</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack serverless application using AWS Lambda, DynamoDB, and CloudFront with Infrastructure as Code.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">AWS</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Terraform</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Lambda</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CI/CD Pipeline"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">DevOps Automation Toolkit</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive CI/CD pipeline with automated testing, security scanning, and multi-environment deployment.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">GitHub Actions</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Docker</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Kubernetes</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Infrastructure Monitoring"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure Monitoring Stack</h3>
                <p className="text-gray-600 mb-4">
                  Complete observability solution with Prometheus, Grafana, and custom alerting for production systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Prometheus</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Grafana</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">ELK Stack</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your infrastructure? Let's discuss your next DevOps project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-blue-600">alex.johnson@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <p className="text-green-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                  <p className="text-purple-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Alex Johnson</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                DevOps Engineer passionate about cloud infrastructure, automation, and building scalable systems.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">CI/CD Automation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">DevOps Consulting</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Monitoring Solutions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Alex Johnson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;