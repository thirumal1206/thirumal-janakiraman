export const person = {
  name: 'Thirumal Janakiraman',
  role: 'Lead Platform Engineer',
  city: 'Berlin',
  email: 'thirumal1206@gmail.com',
  github: 'https://github.com/thirumal1206',
  linkedin: 'https://www.linkedin.com/in/thirumalj',
};

export const facts = [
  { value: '15+', label: 'AI products in production' },
  { value: '18', label: 'cloud projects as code' },
  { value: '98%', label: 'faster AI video pipeline' },
  { value: '2016', label: 'shipping since' },
];

export const mandate = {
  role: 'Founding Platform Engineer',
  company: 'ZDF Sparks',
  since: '2024 to now',
  facts: ['Team of 4', '3 direct reports', '2 more AI teams', 'Reports to the CTO'],
  outcomes: [
    'Built the cloud foundation and the path from prototype to production, from zero.',
    'Took 15+ AI products to production on Google Cloud.',
    'Set the engineering standards every team ships by.',
  ],
};

export const domains = [
  { icons: ['google-cloud', 'aws', 'terraform'], title: 'Cloud architecture', text: 'Landing zones and multi environment delivery, all as code.' },
  { icons: ['google-cloud', 'aws', 'docker'], title: 'Serverless and events', text: 'Scale with demand, cost nothing when idle.' },
  { icons: ['python', 'fastapi', 'typescript'], title: 'Agentic systems', text: 'Agents, MCP servers and tool orchestration in production.' },
  { icons: ['postgres', 'google-cloud', 'python'], title: 'Data', text: 'Retrieval pipelines and data protected before it reaches a model.' },
  { icons: ['gitlab', 'github', 'google-cloud'], title: 'Security', text: 'Single sign on, zero trust, least privilege.' },
  { icons: ['google-cloud', 'aws', 'grafana'], title: 'Cost', text: 'Budgets and spend caps from day one.' },
];

export type Work = {
  id: string;
  tag: string;
  title: string;
  facts: string[];
  challenge: string;
  did: string[];
  outcome: string;
  image?: { src: string; alt: string };
  link?: { href: string; label: string };
  flow?: string[];
  metric: { value: string; label: string };
};

export const work: Work[] = [
  {
    id: 'launch',
    tag: 'Cloud · launch readiness',
    title: 'Taking AI products live',
    metric: { value: '3 layers', label: 'load tested before every launch' },
    facts: ['Client products', 'Google Cloud'],
    challenge: 'Demos meet real users, a security review and a cloud bill all at once.',
    did: [
      'Load test the model, agent runtime and service separately.',
      'Guards in front of agents, spend caps per environment.',
    ],
    outcome: 'Every launch ships with known limits and a known bill.',
    flow: ['Load test', 'Security review', 'Data placement', 'Spend caps', 'Launch'],
  },
  {
    id: 'alfred',
    tag: 'Robotics · HackLab Berlin 2026',
    title: 'Alfred, a robot arm you talk to',
    metric: { value: '~5 mm', label: 'calibration on the real arm' },
    facts: ['NormaCore track', 'ElRobot 7+1 axis'],
    challenge: "Drive NormaCore's ElRobot with a coding agent through its Station API.",
    did: [
      'Claude plans; deterministic code moves the arm and enforces safety.',
      'Each mode is an MCP pack on the same arm.',
    ],
    outcome: 'Picked real objects into bins, about 28 seconds each.',
    image: { src: '/alfred-arm.jpg', alt: 'The ElRobot arm over the hackathon table, with objects marked by the vision step' },
    link: { href: '/blog/building-alfred/', label: 'Full story' },
  },
  {
    id: 'video',
    tag: 'Generative AI · education',
    title: 'AI video lectures at scale',
    metric: { value: '24 h → 30 min', label: 'per run, at lower cost' },
    facts: ['130,000+ students', 'AWS'],
    challenge: 'A sequential pipeline took a full day per lecture video.',
    did: [
      'Rebuilt it event driven: a queue fans out to parallel workers.',
      'Professors approve content before rendering.',
    ],
    outcome: 'Featured on the AWS Public Sector Blog.',
    flow: ['Coursebook', 'Queue', 'Script · Audio · Avatar', 'Review', 'Video'],
  },
];

export const principles = [
  { title: 'Serverless first', text: 'Kubernetes only when it earns its cost.' },
  { title: 'Golden paths', text: 'The right way is the easy way.' },
  { title: 'Tests decide releases', text: 'A green pipeline, not a meeting.' },
  { title: 'Zero trust for agents', text: 'One identity and least privilege per agent.' },
  { title: 'The model decides, code enforces', text: 'Limits a prompt cannot talk around.' },
  { title: 'Every euro has an owner', text: 'Cost is a design input.' },
];

export const experience = [
  { company: 'ZDF Sparks', role: 'Founding Platform Engineer, now Lead', dates: '2024 to now', place: 'Berlin' },
  { company: 'IU International University', role: 'Senior Fullstack Engineer, AI media', dates: '2023 to 2024', place: 'Kassel' },
  { company: 'Fraunhofer IPT', role: 'MLOps platform, master thesis', dates: '2022 to 2023', place: 'Aachen' },
  { company: 'Fraunhofer IEE', role: 'Full Stack Developer', dates: '2020 to 2021', place: 'Kassel' },
  { company: 'Cognizant', role: 'Software Developer', dates: '2016 to 2020', place: 'Kochi, India' },
];

export const projects = [
  { name: 'toolwall', href: 'https://github.com/thirumal1206/toolwall', text: 'Policy firewall for agent tool calls.' },
  { name: 'agent-replay', href: 'https://github.com/thirumal1206/agent-replay', text: 'Regression tests for agent behaviour.' },
  { name: 'backstage-agents', href: 'https://github.com/thirumal1206/backstage-agents', text: 'A catalogue for AI agents.' },
  { name: 'hacklab-2026-normacore', href: 'https://github.com/thirumal1206/hacklab-2026-normacore', text: 'Alfred: voice, vision and Claude on a robot arm.' },
];
