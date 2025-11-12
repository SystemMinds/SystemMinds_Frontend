import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const brandFont = '"Poppins", sans-serif'
const serifFont = '"Volkhov", "Georgia", serif'

function Career() {
  const [selectedRole, setSelectedRole] = useState(null)

  const roles = [
    {
      id: 'developer',
      title: 'Developer',
      description: `At SystemMinds, our development process is built on modern software engineering principles and collaborative workflows. Developers work in agile teams, participating in daily standups, sprint planning, and retrospectives to ensure continuous improvement. The development lifecycle follows a structured approach: requirements gathering, technical design, implementation, code reviews, testing, and deployment. We emphasize writing clean, maintainable code that follows SOLID principles and design patterns. Developers collaborate closely with product managers, designers, and QA engineers to deliver high-quality software solutions.`,
      skills: {
        frontend: 'Our frontend development leverages React.js and React Native for building responsive web applications and cross-platform mobile apps. Developers work with JavaScript and TypeScript to create type-safe, scalable user interfaces. We use Tailwind CSS for rapid UI development and maintain consistent design systems. HTML/CSS expertise is essential for crafting pixel-perfect layouts and ensuring cross-browser compatibility.',
        backend: 'Backend development at SystemMinds focuses on building robust, scalable server-side applications. We primarily use Java with Spring Boot and Spring MVC frameworks for enterprise-grade solutions. Python is employed for data processing, automation, and API development. Our architecture follows microservices principles, enabling independent deployment and scaling of services. Node.js is used for real-time applications and serverless functions.',
        databases: 'Database management is crucial for our applications. We work with MySQL and PostgreSQL for relational data, ensuring ACID compliance and data integrity. MongoDB is used for document-based storage and flexible schema requirements. Redis serves as our caching layer and session store, significantly improving application performance.',
        practices: 'We follow Agile and Scrum methodologies, with two-week sprints and regular retrospectives. Test-Driven Development (TDD) ensures code quality and reduces bugs. Code reviews are mandatory, fostering knowledge sharing and maintaining high coding standards. Continuous integration and deployment pipelines automate testing and deployment processes.'
      }
    },
    {
      id: 'devops',
      title: 'DevOps/Cloud',
      description: `DevOps engineers at SystemMinds bridge the gap between development and operations, ensuring seamless deployment and reliable infrastructure. Our DevOps practices focus on Infrastructure as Code (IaC), enabling version-controlled, reproducible infrastructure deployments. We maintain CI/CD pipelines that automate testing, building, and deployment processes, reducing manual errors and accelerating release cycles. The team works closely with developers to optimize application performance, implement monitoring solutions, and ensure system reliability. Security is integrated into every stage of the development lifecycle, with automated security scanning and compliance checks.`,
      skills: {
        cloud: 'We leverage major cloud platforms including AWS, Azure, and GCP to build scalable, resilient infrastructure. Containerization with Docker ensures consistent environments across development, staging, and production. Kubernetes orchestrates container deployments, enabling auto-scaling, load balancing, and self-healing capabilities. Our cloud architecture follows best practices for high availability, disaster recovery, and cost optimization.',
        tools: 'CI/CD pipelines are built using Jenkins and GitLab CI/CD, automating the entire software delivery process. Terraform enables Infrastructure as Code, allowing us to define and manage cloud resources declaratively. Ansible automates configuration management and application deployment. Monitoring solutions like Prometheus and Grafana provide real-time insights into system performance and health metrics.',
        monitoring: 'Comprehensive monitoring is essential for maintaining system reliability. CloudWatch provides AWS-specific monitoring and logging capabilities. The ELK Stack (Elasticsearch, Logstash, Kibana) centralizes log management and analysis. New Relic and Datadog offer application performance monitoring, helping identify bottlenecks and optimize system performance.',
        practices: 'Infrastructure as Code ensures all infrastructure is version-controlled and reproducible. CI/CD pipelines automate testing and deployment, enabling rapid and reliable releases. Automation reduces manual tasks and human errors. Security practices include automated vulnerability scanning, access control, and compliance monitoring to protect our systems and data.'
      }
    },
    {
      id: 'hr',
      title: 'HR',
      description: `The HR team at SystemMinds plays a crucial role in building and maintaining a thriving workplace culture. We focus on attracting top talent through strategic recruitment initiatives and building strong employer branding. Our HR processes are designed to support employee growth, ensure fair compensation, and maintain compliance with labor laws. The team works closely with leadership to develop policies that balance business needs with employee well-being. We emphasize transparent communication, regular feedback, and creating opportunities for professional development.`,
      skills: {
        recruitment: 'Talent acquisition involves sourcing candidates through multiple channels, conducting structured interviews, and making data-driven hiring decisions. We use behavioral interviewing techniques to assess cultural fit and technical capabilities. The onboarding process ensures new employees are integrated smoothly into the team, with clear expectations and comprehensive training. Employee relations management involves addressing concerns, mediating conflicts, and fostering positive workplace relationships.',
        management: 'Performance management includes setting clear goals, conducting regular reviews, and providing constructive feedback. We design competitive compensation and benefits packages that attract and retain top talent. HR policies are regularly reviewed and updated to reflect best practices and legal requirements. Compliance management ensures adherence to labor laws, data protection regulations, and industry standards.',
        development: 'Training and development programs are tailored to individual career goals and organizational needs. We offer technical training, soft skills workshops, and leadership development opportunities. Succession planning identifies and develops internal talent for key positions. Employee engagement initiatives include team-building activities, recognition programs, and regular feedback sessions to maintain high morale and job satisfaction.',
        tools: 'HRIS systems centralize employee data and streamline HR processes. Applicant Tracking Systems (ATS) manage the recruitment pipeline efficiently. Performance management tools facilitate goal setting, reviews, and feedback. HR analytics provide insights into workforce trends, helping make informed decisions about hiring, retention, and development strategies.'
      }
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: `Marketing at SystemMinds drives brand awareness, customer acquisition, and business growth through strategic digital initiatives. Our marketing team develops comprehensive campaigns that align with business objectives and target audience needs. We focus on data-driven decision making, continuously analyzing campaign performance and optimizing strategies for better results. Content creation is central to our approach, producing valuable resources that educate prospects and establish thought leadership. The team collaborates closely with sales, product, and design teams to ensure consistent messaging and brand representation across all touchpoints.`,
      skills: {
        digital: 'SEO and SEM strategies improve organic visibility and drive targeted traffic through paid advertising. Social media marketing builds community engagement and brand presence across platforms. Content marketing creates valuable resources like blogs, whitepapers, and case studies that attract and nurture leads. Email marketing campaigns nurture prospects through the sales funnel with personalized, timely communications.',
        analytics: 'Google Analytics provides comprehensive insights into website traffic, user behavior, and conversion paths. Marketing automation platforms streamline lead nurturing and scoring processes. A/B testing enables data-driven optimization of campaigns, landing pages, and messaging. Conversion optimization focuses on improving user experience and removing friction points to increase conversion rates.',
        creative: 'Brand management ensures consistent messaging and visual identity across all channels. Graphic design creates compelling visual content for campaigns, social media, and marketing materials. Video production develops engaging video content for social media, website, and advertising. Copywriting crafts persuasive, clear messaging that resonates with target audiences and drives action.',
        tools: 'HubSpot provides an integrated platform for CRM, marketing automation, and analytics. Mailchimp manages email campaigns and subscriber lists effectively. Hootsuite schedules and manages social media content across multiple platforms. Canva and Adobe Creative Suite enable professional design work for marketing materials and digital assets.'
      }
    },
    {
      id: 'testing',
      title: 'Testing',
      description: `Quality assurance is integral to our development process at SystemMinds. Test engineers work alongside developers from the early stages of development, participating in requirement analysis and test planning. Our testing approach follows a shift-left strategy, catching defects early in the development cycle. We maintain a balance between manual and automated testing, with automation handling repetitive test cases and manual testing focusing on exploratory and user experience testing. The testing team ensures that all products meet quality standards before release, protecting our reputation and ensuring customer satisfaction.`,
      skills: {
        automation: 'Test automation frameworks like Selenium and Cypress enable efficient web application testing. Jest is used for JavaScript unit testing, ensuring code quality at the component level. JUnit and TestNG provide robust testing frameworks for Java applications. Postman automates API testing, validating endpoints, request/response handling, and integration points. Automated tests run as part of CI/CD pipelines, providing rapid feedback on code changes.',
        types: 'Unit testing validates individual components and functions in isolation. Integration testing ensures different modules work together correctly. End-to-end testing validates complete user workflows and business scenarios. Performance testing identifies bottlenecks and ensures applications can handle expected load and scale appropriately.',
        tools: 'JIRA manages test cases, tracks bugs, and provides visibility into testing progress. TestRail organizes test cases, plans test runs, and generates comprehensive test reports. Bugzilla tracks defects through their lifecycle from discovery to resolution. JMeter and LoadRunner conduct performance and load testing to ensure system scalability and reliability.',
        practices: 'Test planning involves analyzing requirements, identifying test scenarios, and estimating effort. Test case design creates detailed, reusable test cases covering functional and non-functional requirements. Bug tracking ensures all defects are documented, prioritized, and resolved systematically. Quality assurance processes include code reviews, test reviews, and release readiness assessments to maintain high quality standards.'
      }
    },
    {
      id: 'finance',
      title: 'Finance',
      description: `The finance team at SystemMinds ensures financial health and supports strategic decision-making through accurate financial reporting and analysis. We maintain meticulous accounting records, ensuring all transactions are properly recorded and reconciled. Financial planning and analysis provide insights that guide business strategy, resource allocation, and investment decisions. The team works closely with leadership to develop budgets, monitor performance, and identify opportunities for cost optimization. Compliance with financial regulations and tax requirements is maintained through systematic processes and regular audits.`,
      skills: {
        accounting: 'Financial reporting involves preparing accurate financial statements including income statements, balance sheets, and cash flow statements. Bookkeeping maintains detailed records of all financial transactions, ensuring accuracy and completeness. Accounts payable and receivable management ensures timely payments and collections, maintaining healthy cash flow. Reconciliation processes verify the accuracy of financial records and identify discrepancies.',
        analysis: 'Financial analysis evaluates business performance, profitability, and financial health through ratio analysis and trend identification. Budgeting involves creating detailed financial plans aligned with business objectives and strategic goals. Forecasting predicts future financial performance based on historical data and business trends. Variance analysis compares actual results to budgets and forecasts, identifying causes of deviations and recommending corrective actions.',
        tools: 'QuickBooks manages day-to-day accounting operations, invoicing, and financial reporting. SAP provides enterprise-level financial management and reporting capabilities. Excel is essential for financial modeling, data analysis, and creating custom reports. Financial modeling builds complex models to evaluate scenarios, support investment decisions, and forecast future performance.',
        compliance: 'Tax compliance ensures accurate calculation and timely filing of all tax returns, minimizing tax liability while maintaining compliance. Audit support prepares documentation and responds to auditor inquiries during internal and external audits. Financial controls establish policies and procedures to prevent errors, fraud, and ensure data integrity. Regulatory reporting ensures compliance with financial regulations and timely submission of required reports to regulatory bodies.'
      }
    },
    {
      id: 'accountancy',
      title: 'Accountancy',
      description: `Accountants at SystemMinds maintain the financial backbone of the organization through meticulous record-keeping and compliance management. We follow Generally Accepted Accounting Principles (GAAP) to ensure financial statements accurately represent the company's financial position. The accounting team manages all financial transactions, maintains ledgers, and prepares comprehensive financial reports. Tax planning and compliance are critical responsibilities, ensuring the company meets all tax obligations while optimizing tax efficiency. Internal controls and audit processes ensure financial integrity and regulatory compliance.`,
      skills: {
        core: 'GAAP knowledge ensures financial statements are prepared according to standard accounting principles, enabling accurate financial reporting and comparability. Financial statement preparation involves creating income statements, balance sheets, and cash flow statements that accurately reflect business performance. Ledger management maintains detailed records of all accounts, tracking debits, credits, and balances. Trial balance preparation verifies the mathematical accuracy of accounting records before financial statement preparation.',
        tax: 'Tax preparation involves calculating tax liabilities, preparing tax returns, and ensuring timely filing to avoid penalties. Tax planning strategies optimize tax efficiency while maintaining compliance with tax laws and regulations. VAT/GST management handles value-added tax and goods and services tax calculations, returns, and compliance. Corporate tax expertise ensures proper calculation and reporting of corporate income taxes, taking advantage of available deductions and credits.',
        software: 'Tally is widely used for accounting and financial management in many regions, providing comprehensive accounting features. QuickBooks offers user-friendly accounting software for small to medium businesses. SAP FICO provides enterprise-level financial and controlling modules for large organizations. Xero offers cloud-based accounting solutions with real-time financial visibility and collaboration features.',
        compliance: 'Audit support involves preparing documentation, responding to auditor inquiries, and ensuring audit readiness. Compliance reporting ensures timely submission of required reports to regulatory authorities and government agencies. Internal controls establish policies and procedures to prevent errors, fraud, and ensure financial data integrity. Documentation maintains comprehensive records of all financial transactions, policies, and procedures for audit and compliance purposes.'
      }
    }
  ]

  const handleRoleClick = (roleId) => {
    setSelectedRole(selectedRole === roleId ? null : roleId)
  }
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A', color: '#ffffff' }}>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .expertise-content {
          animation: slideIn 0.5s ease-out;
        }
        .expertise-content::-webkit-scrollbar {
          width: 6px;
        }
        .expertise-content::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }
        .expertise-content::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
        }
        .expertise-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.3);
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-5 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ 
                fontFamily: serifFont,
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
            >
              Build Your Career with{' '}
              <span style={{ color: '#FF8A3D' }}>SystemMinds</span>
            </h1>
            <p 
              className="text-base sm:text-lg max-w-3xl mx-auto"
              style={{ 
                fontFamily: brandFont,
                color: 'rgba(255,255,255,0.8)',
                lineHeight: '1.5',
                fontSize: '15px'
              }}
            >
              Join a team that's shaping the future of digital innovation. 
              We're looking for passionate individuals who want to make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-12 px-5 sm:px-10 lg:px-16" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                style={{ 
                  fontFamily: serifFont,
                  lineHeight: '1.2'
                }}
              >
                Why SystemMinds?
              </h2>
              <div 
                className="space-y-3 text-sm"
                style={{ 
                  fontFamily: brandFont,
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: '1.6',
                  fontSize: '14px'
                }}
              >
                <p>
                  SystemMinds is a fast-growing IT solutions startup focused on delivering modern, 
                  efficient, and scalable digital products. We specialize in building web applications, 
                  mobile apps, APIs, and enterprise solutions that help businesses transform their ideas into reality.
                </p>
                <p>
                  Our team combines creativity, technical expertise, and a results-driven approach to craft 
                  clean, reusable, and high-performance software. We believe that smart code and simple design 
                  can create powerful digital experiences that last.
                </p>
                <p>
                  At SystemMinds, we're not just developers—we're your technology partners, helping turn 
                  ideas into smart, scalable realities.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="p-4 rounded-lg border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <h3 
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: brandFont, color: '#FF8A3D', fontSize: '15px' }}
                >
                  Innovation First
                </h3>
                <p 
                  style={{ 
                    fontFamily: brandFont,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: '1.5',
                    fontSize: '13px'
                  }}
                >
                  Work with cutting-edge technologies and modern frameworks. 
                  We stay ahead of the curve and encourage continuous learning.
                </p>
              </div>
              <div 
                className="p-4 rounded-lg border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <h3 
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: brandFont, color: '#FF8A3D', fontSize: '15px' }}
                >
                  Growth Opportunities
                </h3>
                <p 
                  style={{ 
                    fontFamily: brandFont,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: '1.5',
                    fontSize: '13px'
                  }}
                >
                  Fast-track your career with challenging projects, mentorship, 
                  and opportunities to lead initiatives that matter.
                </p>
              </div>
              <div 
                className="p-4 rounded-lg border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <h3 
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: brandFont, color: '#FF8A3D', fontSize: '15px' }}
                >
                  Collaborative Culture
                </h3>
                <p 
                  style={{ 
                    fontFamily: brandFont,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: '1.5',
                    fontSize: '13px'
                  }}
                >
                  Join a team that values transparency, open communication, 
                  and collaborative problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 px-5 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ 
              fontFamily: serifFont,
              lineHeight: '1.2'
            }}
          >
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Competitive Compensation',
                description: 'Attractive salary packages with performance-based bonuses and equity options.'
              },
              {
                title: 'Flexible Work',
                description: 'Remote-first culture with flexible hours to help you maintain work-life balance.'
              },
              {
                title: 'Learning & Development',
                description: 'Access to courses, conferences, and workshops to keep your skills sharp.'
              },
              {
                title: 'Health & Wellness',
                description: 'Comprehensive health insurance and wellness programs for you and your family.'
              },
              {
                title: 'Modern Tech Stack',
                description: 'Work with React, Java, Python, Spring Boot, and the latest cloud technologies.'
              },
              {
                title: 'Impactful Projects',
                description: 'Build products that solve real problems and make a difference for our clients.'
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border transition-all duration-300 hover:border-orange-500/50"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <h3 
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: brandFont, fontSize: '15px' }}
                >
                  {benefit.title}
                </h3>
                <p 
                  style={{ 
                    fontFamily: brandFont,
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.5',
                    fontSize: '13px'
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-12 px-5 sm:px-10 lg:px-16" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ 
              fontFamily: serifFont,
              lineHeight: '1.2'
            }}
          >
            Our Expertise
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleClick(role.id)}
                className="p-4 rounded-lg border transition-all duration-300 text-center transform hover:scale-105"
                style={{ 
                  fontFamily: brandFont,
                  borderColor: selectedRole === role.id ? '#10B981' : 'rgba(255,255,255,0.1)',
                  backgroundColor: selectedRole === role.id ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.02)',
                  boxShadow: selectedRole === role.id ? '0 0 20px rgba(16,185,129,0.2)' : 'none'
                }}
              >
                <div 
                  className="text-sm font-semibold transition-colors duration-300"
                  style={{ 
                    color: selectedRole === role.id ? '#10B981' : '#ffffff'
                  }}
                >
                  {role.title}
                </div>
              </button>
            ))}
          </div>
          
          {selectedRole && (
            <div 
              className="mt-6 p-6 rounded-xl border expertise-content"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(16,185,129,0.3)',
                transition: 'all 0.5s ease'
              }}
            >
              {(() => {
                const role = roles.find(r => r.id === selectedRole)
                const skillCategories = Object.keys(role.skills)
                return (
                  <div>
                    {/* Description Section */}
                    <div className="mb-6">
                      <h3 
                        className="text-lg font-semibold mb-3"
                        style={{ 
                          fontFamily: brandFont, 
                          color: '#10B981',
                          fontSize: '16px'
                        }}
                      >
                        Role Overview
                      </h3>
                      <p 
                        style={{ 
                          fontFamily: brandFont,
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '14px',
                          lineHeight: '1.7',
                          textAlign: 'justify',
                          marginBottom: '20px'
                        }}
                      >
                        {role.description}
                      </p>
                    </div>
                    
                    {/* Skills Section */}
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-3"
                        style={{ 
                          fontFamily: brandFont, 
                          color: '#10B981',
                          fontSize: '16px'
                        }}
                      >
                        Skills & Expertise
                      </h3>
                      <div className="space-y-4">
                        {skillCategories.map((category) => (
                          <div key={category}>
                            <h4 
                              className="text-base font-semibold mb-2 capitalize"
                              style={{ 
                                fontFamily: brandFont, 
                                color: '#ffffff',
                                fontSize: '15px',
                                fontWeight: 600
                              }}
                            >
                              {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                            <p 
                              style={{ 
                                fontFamily: brandFont,
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '14px',
                                lineHeight: '1.7',
                                textAlign: 'justify',
                                marginBottom: '16px'
                              }}
                            >
                              {role.skills[category]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          )}
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="py-12 px-5 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ 
              fontFamily: serifFont,
              lineHeight: '1.2'
            }}
          >
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div 
              className="p-5 rounded-xl border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.1)'
              }}
            >
              <h3 
                className="text-lg font-bold mb-3"
                style={{ 
                  fontFamily: serifFont,
                  color: '#FF8A3D',
                  fontSize: '18px'
                }}
              >
                Work-Life Balance
              </h3>
              <p 
                style={{ 
                  fontFamily: brandFont,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.5',
                  fontSize: '14px'
                }}
              >
                We believe that great work comes from well-rested, motivated individuals. 
                Our flexible work arrangements and remote-first approach ensure you can 
                maintain a healthy balance between your professional and personal life.
              </p>
            </div>
            <div 
              className="p-8 rounded-xl border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.1)'
              }}
            >
              <h3 
                className="text-lg font-bold mb-3"
                style={{ 
                  fontFamily: serifFont,
                  color: '#FF8A3D',
                  fontSize: '18px'
                }}
              >
                Continuous Learning
              </h3>
              <p 
                style={{ 
                  fontFamily: brandFont,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.5',
                  fontSize: '14px'
                }}
              >
                Technology evolves rapidly, and so do we. We invest in your growth through 
                training programs, conference attendance, certifications, and mentorship 
                opportunities. Your success is our success.
              </p>
            </div>
            <div 
              className="p-8 rounded-xl border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.1)'
              }}
            >
              <h3 
                className="text-lg font-bold mb-3"
                style={{ 
                  fontFamily: serifFont,
                  color: '#FF8A3D',
                  fontSize: '18px'
                }}
              >
                Collaborative Environment
              </h3>
              <p 
                style={{ 
                  fontFamily: brandFont,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.5',
                  fontSize: '14px'
                }}
              >
                We foster an open, inclusive environment where every voice matters. 
                Regular team meetings, code reviews, and knowledge-sharing sessions 
                ensure we learn from each other and grow together.
              </p>
            </div>
            <div 
              className="p-8 rounded-xl border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.1)'
              }}
            >
              <h3 
                className="text-lg font-bold mb-3"
                style={{ 
                  fontFamily: serifFont,
                  color: '#FF8A3D',
                  fontSize: '18px'
                }}
              >
                Impact & Ownership
              </h3>
              <p 
                style={{ 
                  fontFamily: brandFont,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.5',
                  fontSize: '14px'
                }}
              >
                You'll work on projects that make a real difference. We give you ownership 
                of your work and trust you to make decisions. Your contributions directly 
                impact our clients and shape the future of SystemMinds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-12 px-5 sm:px-10 lg:px-16" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ 
              fontFamily: serifFont,
              lineHeight: '1.2'
            }}
          >
            How We Hire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                step: '01',
                title: 'Application',
                description: 'Send us your resume and a cover letter explaining why you\'d like to join SystemMinds. We review every application carefully.'
              },
              {
                step: '02',
                title: 'Initial Screening',
                description: 'We\'ll have a brief conversation to understand your background, skills, and what you\'re looking for in your next role.'
              },
              {
                step: '03',
                title: 'Technical Assessment',
                description: 'Depending on the role, you may complete a technical assessment or coding challenge to demonstrate your skills.'
              },
              {
                step: '04',
                title: 'Team Interview',
                description: 'Meet with our team members to discuss your experience, problem-solving approach, and how you\'d fit into our culture.'
              },
              {
                step: '05',
                title: 'Final Discussion',
                description: 'A final conversation with leadership to discuss role details, expectations, and answer any questions you may have.'
              },
              {
                step: '06',
                title: 'Offer & Onboarding',
                description: 'If it\'s a mutual fit, we\'ll extend an offer. Once accepted, we\'ll ensure a smooth onboarding process to get you started.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div 
                  className="p-4 rounded-xl border h-full"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    borderColor: 'rgba(255,255,255,0.1)'
                  }}
                >
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ 
                      fontFamily: serifFont,
                      color: '#FF8A3D',
                      opacity: 0.3,
                      fontSize: '28px'
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 
                    className="text-base font-semibold mb-2"
                    style={{ 
                      fontFamily: brandFont,
                      color: '#ffffff',
                      fontSize: '15px'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: brandFont,
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: '1.5',
                      fontSize: '13px'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Be Connected */}
      <section className="py-12 px-5 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="p-8 rounded-xl border"
            style={{ 
              backgroundColor: 'rgba(255,138,61,0.05)',
              borderColor: 'rgba(255,138,61,0.3)'
            }}
          >
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              style={{ 
                fontFamily: serifFont,
                lineHeight: '1.2'
              }}
            >
              Ready to Join Us?
            </h2>
            <p 
              className="text-base sm:text-lg mb-6 max-w-2xl mx-auto"
              style={{ 
                fontFamily: brandFont,
                color: 'rgba(255,255,255,0.8)',
                lineHeight: '1.5',
                fontSize: '14px'
              }}
            >
              We're always looking for talented individuals who are passionate about technology 
              and want to be part of our growing team. Even if you don't see a specific opening 
              that matches your profile, we'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:info.systemminds@gmail.com?subject=Career Inquiry - SystemMinds"
                className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#FF8A3D',
                  color: '#0A0A0A',
                  fontFamily: brandFont
                }}
              >
                Connect With Us
              </a>
              <Link
                to="/"
                className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 border"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.3)',
                  fontFamily: brandFont
                }}
              >
                Back to Home
              </Link>
            </div>
            <p 
              className="mt-6 text-xs"
              style={{ 
                fontFamily: brandFont,
                color: 'rgba(255,255,255,0.6)',
                fontSize: '12px'
              }}
            >
              Send us your resume and a brief note about why you'd like to join SystemMinds. 
              We review every application and will get back to you soon!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white" style={{ backgroundColor: '#07090f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 xl:px-16 py-10">
          <div className="grid gap-4 md:gap-5 lg:gap-6 sm:grid-cols-2 md:grid-cols-3" style={{ alignItems: 'flex-start', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))' }}>
            <div className="space-y-3 text-center sm:text-left">
              <p style={{ fontFamily: brandFont, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.18em' }}>Contact</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info.systemminds@gmail.com"
                    style={{
                      fontFamily: brandFont,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    info.systemminds@gmail.com
                  </a>
                </li>
                <li>
                  <span
                    style={{
                      fontFamily: brandFont,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    Bengaluru · Remote-first
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <p style={{ fontFamily: brandFont, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.18em' }}>Quick Links</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    style={{
                      fontFamily: brandFont,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="/#about"
                    style={{
                      fontFamily: brandFont,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#our-journey"
                    style={{
                      fontFamily: brandFont,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    Our Journey
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <p style={{ fontFamily: brandFont, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.18em' }}>Connect</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/company/systemminds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: brandFont,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/systemminds.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: brandFont,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
            <p style={{ fontFamily: brandFont, fontSize: '13px', color: 'rgba(255,255,255,0.58)' }}>
              © {new Date().getFullYear()} SystemMinds. Building dependable digital products for ambitious teams.
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-end" style={{ fontFamily: brandFont, fontSize: '13px' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Privacy Policy</Link>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Terms</Link>
              <a href="/#contact" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Career

