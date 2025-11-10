import heroImageDark from '../assets/images/hero.png'
import heroImageLight from '../assets/images/hero.jpg'
import aboutImage from '../assets/images/about.jpg'
import aboutAltImage from '../assets/images/about.avif'

const projects = [
  {
    slug: 'credito',
    icon: '💳',
    name: 'Credito',
    headline: 'Digital Lending Platform',
    summary: 'A full-stack lending platform with onboarding, risk scoring, disbursement, and servicing dashboards built for a multi-country fintech.',
    heroTag: 'Composable Lending OS',
    heroImage: heroImageDark,
    gallery: [heroImageDark, heroImageLight, aboutImage, aboutAltImage],
    overview:
      'Credito helps partner banks and NBFCs launch consumer and SME lending programmes faster. We designed the experience, modernised the architecture, and automated operational workflows so teams could focus on growth instead of firefighting.',
    challenge:
      'Legacy LOS/LMS stacks created fragmented customer journeys, manual underwriting, and compliance debt. The fintech needed a unified platform that could support rapid experiment cycles while staying audit-ready.',
    solution:
      'We rewired the platform with a domain-driven service mesh, consolidated customer identity, and a design system spanning web + mobile channels. Automated risk scoring, document verification, and disbursal pipelines ensured speed with traceability.',
    techStack: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Cypress'],
      backend: ['Spring Boot', 'Kafka', 'GraphQL + REST', 'PostgreSQL', 'Redis'],
      devops: ['Docker', 'Kubernetes', 'AWS Fargate', 'GitHub Actions', 'Datadog']
    },
    architectureHighlights: [
      'Event-driven domain services for applications, underwriting, repayments, and collections.',
      'Operational dashboards powered by GraphQL federation with row-level permissions.',
      'Zero-downtime release strategy using blue/green deployments with automated smoke tests.',
      'Policy-as-code guardrails covering KYC, AML, and data retention requirements.'
    ],
    deliveryFlow: [
      {
        title: 'Discovery & Mapping',
        description: 'Shadowed operations, mapped customer journeys, and identified integration hot spots to prioritise.'
      },
      {
        title: 'Architecture Sprints',
        description: 'Defined federated service boundaries, data contracts, and observability standards for the new platform.'
      },
      {
        title: 'Experience Build',
        description: 'Delivered web and mobile portals with reusable design tokens, localisation support, and accessibility compliance.'
      },
      {
        title: 'Enablement & Run',
        description: 'Set up release trains, playbooks, and SRE rituals so the fintech could operate the platform with confidence.'
      }
    ],
    outcomes: [
      'Loan approval turnaround time dropped from 72 hours to under 6 hours.',
      'Underwriting team productivity increased 3x through automated document extraction and risk scoring.',
      'Platform availability stayed above 99.97% with proactive alerting and runbooks.'
    ]
  },
  {
    slug: 'pulsecare',
    icon: '🏥',
    name: 'PulseCare',
    headline: 'Population Health Analytics',
    summary: 'Clinical data pipelines and analytics experiences that give hospital leadership real-time visibility across facilities.',
    heroTag: 'Healthcare Intelligence Hub',
    heroImage: aboutImage,
    gallery: [aboutImage, heroImageDark, aboutAltImage, heroImageLight],
    overview:
      'PulseCare aggregates EHR, claims, and IoT device data to surface actionable insights for clinicians and administrators. We built the analytics platform, delivered HIPAA-aligned infrastructure, and trained internal teams to extend capabilities.',
    challenge:
      'Siloed data sources and manual reporting cycles made it impossible to monitor quality metrics and patient throughput across locations.',
    solution:
      'We implemented a secure data lakehouse, automated ingestion from disparate systems, and created configurable dashboards. Predictive models highlighted at-risk patients while respecting governance.',
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      backend: ['Python', 'Spark', 'dbt', 'Snowflake', 'Airflow'],
      devops: ['Terraform', 'AWS Glue', 'Lake Formation', 'Looker', 'PagerDuty']
    },
    architectureHighlights: [
      'Medically coded canonical model using FHIR profiles and terminology services.',
      'Streaming ingestion from medical devices with encryption and consent tracking.',
      'Self-service dashboard builder with row-level security for clinicians and executives.',
      'Automated data quality checks and lineage using Great Expectations and OpenLineage.'
    ],
    deliveryFlow: [
      { title: 'Data Discovery', description: 'Mapped data sources, defined governance policies, and prioritised clinical KPIs.' },
      { title: 'Platform Foundation', description: 'Provisioned secure landing zones, ingestion jobs, and transformation pipelines.' },
      { title: 'Insight Delivery', description: 'Built predictive models, dashboards, and alerting workflows with feedback loops.' },
      { title: 'Operational Handoff', description: 'Enabled hospital teams with training, runbooks, and embedded data champions.' }
    ],
    outcomes: [
      'Reduced reporting cycle time from two weeks to 30 minutes.',
      'Detected deterioration risk 12 hours earlier for ICU patients using predictive insights.',
      'Achieved HIPAA compliance and audit-readiness with continuous monitoring.'
    ]
  },
  {
    slug: 'orbit-commerce',
    icon: '🛒',
    name: 'Orbit Commerce',
    headline: 'Headless Retail Platform',
    summary: 'A composable commerce backend with storefront, OMS, PIM, and loyalty experiences for a global retail brand.',
    heroTag: 'Composable Retail Platform',
    heroImage: heroImageLight,
    gallery: [heroImageLight, heroImageDark, aboutAltImage, aboutImage],
    overview:
      'Orbit Commerce empowers merchandisers to launch campaigns, manage inventory, and personalise storefronts across geographies. We architected the platform, built core services, and introduced automation that keeps releases nimble.',
    challenge:
      'The retailer operated on monolithic suites that slowed experimentation, complicated localisation, and caused downtime during peak sale events.',
    solution:
      'We decomposed the stack into domain microservices, introduced API-first integrations, and rolled out a design system for web + kiosks. Feature flags and observability ensured resilience during high-traffic campaigns.',
    techStack: {
      frontend: ['Next.js', 'React Server Components', 'Tailwind', 'Storybook'],
      backend: ['NestJS', 'EventBridge', 'DynamoDB', 'Elasticsearch', 'Redis'],
      devops: ['AWS CDK', 'Kubernetes', 'LaunchDarkly', 'New Relic', 'CloudFront']
    },
    architectureHighlights: [
      'CQRS pattern for product catalogue and search with millisecond response times.',
      'Edge caching strategy with stale-while-revalidate for flash sale performance.',
      'Order orchestration engine handling split shipments and marketplace sellers.',
      'Customer 360 service syncing loyalty, CRM, and marketing automation platforms.'
    ],
    deliveryFlow: [
      { title: 'Experience Vision', description: 'Workshops with retail, marketing, and logistics to define north-star journeys.' },
      { title: 'Composable Blueprint', description: 'Selected MACH-aligned services and defined integration contracts.' },
      { title: 'Implementation Waves', description: 'Delivered core services and storefronts in iterative launch cycles.' },
      { title: 'Scale & Optimise', description: 'Rolled out experimentation, performance budgets, and FinOps guardrails.' }
    ],
    outcomes: [
      'Checkout conversion improved by 18% through performance and UX enhancements.',
      'Campaign launch time reduced from 10 days to 24 hours with reusable templates.',
      'Black Friday peak traffic handled with zero downtime and 40% lower infrastructure cost.'
    ]
  },
  {
    slug: 'spectrum-ai',
    icon: '🤖',
    name: 'Spectrum AI',
    headline: 'Generative Ops Assistant',
    summary: 'Agentic workflows that automate incident response, playbook execution, and insights for DevOps teams.',
    heroTag: 'AI-assisted Operations',
    heroImage: aboutAltImage,
    gallery: [aboutAltImage, aboutImage, heroImageDark, heroImageLight],
    overview:
      'Spectrum AI sits inside reliability teams as a co-pilot—triaging alerts, suggesting remediations, and enriching incidents with context. We architected the agent framework, ensured guardrails, and integrated it with tooling already in use.',
    challenge:
      'Operations teams were overwhelmed by noisy alerts and manual playbooks. Knowledge lived in silos, making it hard to respond quickly without senior engineers on call.',
    solution:
      'We designed retrieval-augmented agents that plug into observability, ticketing, and runbook systems. Guardrails keep actions safe, while human-in-the-loop approvals ensure accountability.',
    techStack: {
      frontend: ['Vite', 'React', 'Radix UI', 'Tailwind'],
      backend: ['Python', 'FastAPI', 'LangChain', 'Celery', 'Neo4j'],
      devops: ['OpenAI / Azure OpenAI', 'Pinecone', 'Prometheus', 'Grafana', 'PagerDuty', 'Argo Workflows']
    },
    architectureHighlights: [
      'RAG pipelines with structured retrieval of runbooks, incident history, and telemetry.',
      'Action router that decides between automation, information retrieval, or escalation.',
      'Policy engine enforcing SOC2 controls, approval requirements, and audit logging.',
      'Continuous learning loop capturing post-incident feedback to improve recommendations.'
    ],
    deliveryFlow: [
      { title: 'Problem Framing', description: 'Mapped incident lifecycle, toolchain, and automation opportunities with SRE teams.' },
      { title: 'Agent Architecture', description: 'Designed guardrails, context retrieval, and integration strategy across systems.' },
      { title: 'Pilot & Iterate', description: 'Deployed agents to selected squads, measuring MTTR, false positives, and satisfaction.' },
      { title: 'Rollout & Enablement', description: 'Scaled to global teams with governance, training, and continuous improvement cadences.' }
    ],
    outcomes: [
      'Mean time to resolve incidents dropped by 32% across pilot squads.',
      'First-response automation handled 45% of routine alerts, freeing engineers for higher-value work.',
      'Documented playbooks grew 3x with AI-assisted drafting and review loops.'
    ]
  }
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}

export default projects

