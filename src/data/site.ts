export const person = {
  name: 'Thirumal Janakiraman',
  role: 'Lead Platform Engineer',
  city: 'Berlin',
  email: 'thirumal1206@gmail.com',
  github: 'https://github.com/thirumal1206',
  linkedin: 'https://www.linkedin.com/in/thirumalj',
};

export const facts = [
  { value: '15+', label: 'AI products taken to production' },
  { value: '18', label: 'cloud projects built as code' },
  { value: '98%', label: 'faster AI video pipeline' },
  { value: '2016', label: 'in software since' },
];

export const about = [
  'I am the person teams call when an AI idea has to become a real product: secure, scalable, affordable and still easy to change a year later.',
  'I joined my current company as its first platform engineer, when there was no setup at all. I built the cloud foundation, the organisation policies and the path from prototype to production, and I still own them. Today I lead a platform team of four, report to the CTO, and own architecture and planning for two further AI teams.',
  "My work sits where cloud, data, agents and business meet. In one week I might design an event driven backend, review an agent's tool permissions, size the infrastructure for a launch, walk a client through the trade offs of two architectures, and plan next year's budget with leadership.",
  "I started in 2016 as a developer in India, building billing and analytics systems for energy and telecom companies. I came to Germany for my master's, worked in applied research on MLOps and real time collaboration, and then built generative AI services for one of Germany's largest universities. Outside work I read open source code, build small tools for agents and go to hackathons; the latest was HackLab Robotics in Berlin.",
];

export const domains = [
  { icons: ['google-cloud', 'aws', 'terraform'], title: 'Cloud architecture', text: 'Google Cloud first, AWS where it fits. Landing zones, project per product, networking, private only exposure and multi environment delivery, all as code.', tags: ['Google Cloud', 'AWS', 'OpenTofu', 'Terragrunt'] },
  { icons: ['google-cloud', 'aws', 'docker'], title: 'Serverless and event driven', text: 'Cloud Run, queues and fan out, so products scale with demand and cost nothing when idle. Kubernetes where it earns its cost.', tags: ['Cloud Run', 'SQS', 'ECS Fargate', 'Kubernetes'] },
  { icons: ['google-cloud', 'python', 'grafana'], title: 'AI infrastructure', text: 'Model access, agent runtimes and load testing at the model, agent and service layer before launch.', tags: ['Vertex AI', 'Agent Engine', 'Load testing'] },
  { icons: ['python', 'fastapi', 'typescript'], title: 'Agentic systems', text: 'Multi agent products in production: orchestration, MCP servers and tool access, retrieval, evaluation and guardrails.', tags: ['Agents', 'MCP', 'RAG', 'Evals'] },
  { icons: ['postgres', 'google-cloud', 'python'], title: 'Data', text: 'Data architecture for AI products: document and relational stores, retrieval pipelines, and sensitive data protection before it reaches a model.', tags: ['Firestore', 'Cloud SQL', 'Cloud DLP', 'Embeddings'] },
  { icons: ['gitlab', 'github', 'google-cloud'], title: 'Security and identity', text: 'Enterprise single sign on, one identity per agent, least privilege roles, secrets management and prompt injection guards.', tags: ['Entra ID', 'IAM', 'Vault', 'Model Armor'] },
  { icons: ['google-cloud', 'aws', 'grafana'], title: 'Cost and FinOps', text: 'Budgets, alerts and spend caps per environment, and cost allocation per department, so AI spend is visible and owned.', tags: ['Budgets', 'Cost allocation', 'Right sizing'] },
  { icons: [], title: 'Clients and business', text: 'From a client brief to an architecture people can sign off: options and trade offs, effort estimates, maintenance offers, AI strategy with leadership.', tags: ['Solution design', 'Estimation', 'Stakeholders'] },
];

export type Work = {
  id: string;
  tag: string;
  title: string;
  body: string[];
  stack: string[];
  image?: { src: string; alt: string };
  link?: { href: string; label: string };
  flow?: string[];
  metric?: { value: string; label: string };
};

export const work: Work[] = [
  {
    id: 'launch',
    metric: { value: '3 layers', label: 'load tested before every launch: model, agent runtime, service' },
    tag: 'Cloud · launch readiness',
    title: 'How I take an AI product live',
    body: [
      'Many AI products work well in a demo and then meet real users, a security review and a cloud bill. My job is to close that gap before launch, not after it.',
      'I load test at three layers, because the model, the agent runtime and the service each fail in their own way. I review what is exposed and remove anything unsafe, put guards in front of the agents, place workloads in the right region for the data, and set budgets, alerts and spend caps per environment so cost has an owner.',
      'A product leaves this checklist with known limits, a known bill and a small attack surface, and the same checklist runs for every launch.',
    ],
    stack: ['Google Cloud', 'Load testing', 'Prompt injection guards', 'FinOps', 'IAM'],
    flow: ['Load test: model · agents · service', 'Security review and guards', 'Region and data placement', 'Budgets, alerts, spend caps', 'Launch'],
  },
  {
    id: 'alfred',
    metric: { value: '~5 mm', label: 'camera to table calibration on the real arm' },
    tag: 'Robotics · HackLab Robotics Berlin 2026',
    title: 'Alfred, a robot arm you talk to',
    body: [
      "At HackLab Robotics in Berlin I joined the NormaCore track. The brief: connect a coding agent to a real robot through NormaCore's Station API so it can work by looking through the cameras. The robot was NormaCore's own ElRobot, a 7+1 axis arm with ST3215 servos.",
      'Our team built Alfred. You speak to it, a camera finds the objects, Claude decides what to do, and deterministic code moves the ElRobot and keeps it safe. The model never outputs joint angles: speed caps, workspace limits, stall detection and a stop that always works live in the arm server. Every mode is a small MCP pack, so tidying a desk and helping someone with limited arm use are two packs on the same arm.',
      'On the real ElRobot we calibrated the camera to the table to within about 5 mm and picked a pen, a cap, a servo box and sweets into bins, about 28 seconds an object.',
    ],
    stack: ['NormaCore Station', 'ElRobot', 'Claude', 'MCP', 'Python', 'MuJoCo'],
    image: {
      src: '/alfred-arm.jpg',
      alt: 'Camera view of the ElRobot arm over the hackathon table, sweets marked by the vision step and a bin box beside them',
    },
    link: { href: '/blog/building-alfred/', label: 'Read the full story' },
  },
  {
    id: 'video',
    metric: { value: '24 h → 30 min', label: 'per lecture run, at lower cloud cost' },
    tag: 'Generative AI · education',
    title: 'AI video lectures for 130,000+ students',
    body: [
      'A university wanted to turn its coursebooks into short lecture videos with an AI presenter. The first pipeline did every step in sequence, and one run took a full day.',
      'I led the AI video work and rebuilt the pipeline as an event driven system on AWS: a queue fans the work out, and text, image, audio and avatar generation run in parallel. Professors review and approve the content before anything is rendered, so a person stays in the loop.',
      'A run went from 24 hours to under 30 minutes, and the cloud bill went down. We built the first release together with AWS solutions architects, and the work was featured on the AWS Public Sector Blog.',
    ],
    stack: ['AWS', 'ECS Fargate', 'SQS', 'LLMs', 'Event driven'],
    flow: ['Coursebook', 'Queue', 'Script · Audio · Avatar', 'Professor review', 'Lecture video'],
  },
];

export const agentic = [
  { title: 'Tools are the attack surface', text: 'An agent is only as safe as the tools it can call. Every tool sits behind an MCP server with its own scope, and every call is checked against who the agent acts for.' },
  { title: 'Zero trust between agents', text: 'Each agent gets its own identity and the least privilege it needs. Nothing is trusted because it runs inside the platform.' },
  { title: 'The model decides, code enforces', text: 'Language models choose and plan. Limits, permissions, budgets and anything irreversible live in deterministic code that a prompt cannot talk around.' },
  { title: 'Orchestrate, do not hard wire', text: 'Specialist agents with a clear job, an orchestrator that routes between them, and protocols such as MCP and A2A so parts can be swapped.' },
  { title: 'Behaviour is tested like code', text: 'Recorded runs, evaluation sets and CI checks catch a prompt change that makes an agent call the wrong tool or double its cost.' },
  { title: 'Every call is visible', text: 'Telemetry on agents, tools, tokens and cost from day one, so a team can answer what happened and what it cost.' },
];

export const platform = {
  build: [
    'Golden paths, so a new service starts with infrastructure as code, CI/CD and monitoring already in place.',
    'Pipelines that test properly: unit, end to end, load and resilience checks before anything reaches users.',
    'Security by design: single sign on, zero trust, least privilege, secrets kept in a vault and guardrails on every AI call.',
    'Serverless where it fits, so products scale to production without the bill scaling with them.',
    'Architecture people can follow: written decisions, clear boundaries, reviews that teach.',
  ],
  lead: [
    'Joined as the first platform engineer and built the cloud foundation, policies and delivery path from zero.',
    'Lead a platform team of 4 with 3 direct reports, and own architecture and planning for two further AI teams.',
    'Run 1:1s, plan the team roadmap and hire, for my own department and at times for others.',
    'Shape AI strategy and the business side with company leadership, including budgets and cost.',
    'Mentor engineers across cloud, data and full stack until they own their systems.',
  ],
};

export const experience = [
  {
    company: 'ZDF Sparks', role: 'Lead Platform Engineer', dates: 'Dec 2024 to now', place: 'Berlin',
    points: [
      'Joined as the first platform engineer; lead a platform team of 4 and own architecture for two further AI teams.',
      'Architected and delivered 15+ production AI products on Google Cloud within a multicloud setup.',
      'Build agentic AI products: multi agent orchestration, MCP tool integration, retrieval and agent security.',
      'Built 18 Google Cloud projects as code with least privilege IAM, private networking and gated multi environment delivery.',
      'Take products live for clients with load tests, cost controls and security hardening as a launch checklist.',
      'Performance, load and resilience testing as a release requirement before every launch.',
    ],
  },
  {
    company: 'IU International University', role: 'Senior Fullstack Software Engineer', dates: 'Mar 2023 to Nov 2024', place: 'Kassel',
    points: [
      'AI Media Services for 130,000+ students: GenAI text, image and video built as composable services.',
      'Led AI video: the coursebook to avatar lecture pipeline, made 98% faster (24 hours to under 30 minutes).',
      'Co engineered the first release with AWS solutions architects; featured on the AWS Public Sector Blog.',
      'Built LLM pipelines for course summaries and slides, and an enterprise image library with AI generation and search.',
      "Owned the department's AWS architecture and delivery: ECS Fargate, SQS, SES, CloudFormation, CI/CD.",
    ],
  },
  {
    company: 'Fraunhofer IPT', role: 'Master Thesis, MLOps', dates: 'Apr 2022 to Feb 2023', place: 'Aachen',
    points: [
      'Architected an end to end MLOps platform managing any number of ML projects from one portal.',
      'Standardised the model lifecycle on MLflow, delivered on Docker, Kubernetes and Google Cloud Run.',
    ],
  },
  {
    company: 'Fraunhofer IEE', role: 'Full Stack Developer', dates: 'Dec 2020 to Nov 2021', place: 'Kassel',
    points: [
      'Built a smart classroom platform with real time web conferencing and multi user collaboration.',
      'Owned the automated end to end test framework (Selenium WebDriver, Cucumber.js, BDD) for concurrent users.',
    ],
  },
  {
    company: 'Cognizant', role: 'Software Developer', dates: 'Jun 2016 to Mar 2020', place: 'Kochi, India',
    points: [
      'Maintenance lead for a major Middle East telecom: a team of 4 cleared 40% of a year old backlog in 3 months and stopped critical revenue leakage.',
      'Delivered billing, offers and analytics dashboards for US energy companies, later as sole developer with end to end ownership.',
      'Drove production releases across mainframe, DevOps and legacy Smalltalk teams.',
    ],
  },
];

export const projects = [
  { name: 'toolwall', href: 'https://github.com/thirumal1206/toolwall', text: 'A policy firewall for agent tool calls. Decides if this agent may call this tool with these arguments, before the call reaches the MCP server.' },
  { name: 'agent-replay', href: 'https://github.com/thirumal1206/agent-replay', text: 'Record an agent run once, replay it in CI and block pull requests that change its behaviour.' },
  { name: 'backstage-agents', href: 'https://github.com/thirumal1206/backstage-agents', text: 'A Backstage catalogue for AI agents: owners, tools, scopes, policies and the last evaluation.' },
  { name: 'hacklab-2026-normacore', href: 'https://github.com/thirumal1206/hacklab-2026-normacore', text: 'Alfred: voice, vision and Claude driving a NormaCore ElRobot, with safety in deterministic code.' },
];

export const studying = ['n8n', 'Backstage', 'Hugo', 'Strapi', 'Chatwoot', 'OpenProject', 'LeRobot'];

export const skills = [
  { group: 'Platform', items: ['Google Cloud', 'AWS', 'Azure', 'Kubernetes', 'OpenTofu', 'Terraform', 'GitLab CI', 'GitHub Actions', 'Vault'] },
  { group: 'Agentic AI', items: ['Agents', 'MCP', 'A2A', 'RAG', 'LLMOps', 'Guardrails', 'Evals'] },
  { group: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Event driven', 'Queues'] },
  { group: 'Frontend', items: ['Vue', 'React', 'TypeScript', 'Astro'] },
  { group: 'Quality', items: ['Playwright', 'Selenium', 'Load testing', 'Observability'] },
];
