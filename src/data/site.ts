export type Project = {
  id: string
  title: string
  role: string
  summary: string
  tags: string[]
  href: string
  image: string
  imageAlt: string
  imageRatio: string
  extraImage?: string
  extraImageAlt?: string
  extraImageRatio?: string
}

export type ExperienceRole = {
  id: string
  title: string
  org: string
  location: string
  dates: string
  summary: string
}

export const site = {
  name: 'Vikneshvar',
  fullName: 'Vikneshvar Balasubramanian',
  role: 'Generative AI Engineer',
  roleLead: 'Generative AI',
  roleAccent: 'Engineer.',
  tagline:
    'Production RAG, agentic pipelines, and data platforms. Six-plus years, based in Chennai.',
  email: 'bsvikneshvar@gmail.com',
  location: 'Chennai, India',
  introPhoto: '/photos/profile.jpg',
  introPhotoRatio: '1220 / 1367',
  contactPhoto: '/photos/cliff.jpg',
  contactPhotoRatio: '1064 / 1065',
  socials: [
    { label: 'GitHub', href: 'https://github.com/viknesh6697' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vikneshvar-balasubramanian-6b2926161',
    },
  ],
}

export const about = {
  title: 'I build production AI systems that retrieve, reason, and act.',
  text: 'Senior Associate, Gen AI Engineer at PwC. I design RAG and agent systems on AWS Bedrock that ingest enterprise documents, retrieve with hybrid search, and answer in plain language.',
  skills: ['RAG and agents', 'AWS Bedrock', 'Hybrid retrieval', 'Data platforms'],
  certification: 'AWS Certified Generative AI Developer – Professional',
  photo: '/photos/desk.jpg',
  photoRatio: '1181 / 885',
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Desandhiri',
    role: 'Trip planner',
    summary:
      'Starts from a destination and a way of traveling, then puts the days on a map so the route stays in one area.',
    tags: ['Next.js', 'Mapbox', 'Claude'],
    href: 'https://github.com/viknesh6697/Desandhiri',
    image: '/projects/kerala-demo.gif',
    imageAlt: 'Kerala demo of Desandhiri: setup, place discovery, and a day-wise route on the map',
    imageRatio: '960 / 454',
    extraImage: '/projects/desandhiri-sikkim.jpg',
    extraImageAlt: 'A motorcycle stop in the mountains, with prayer flags and snow peaks',
    extraImageRatio: '1967 / 1220',
  },
  {
    id: '02',
    title: 'AWS Auto Control Plane',
    role: 'Control plane',
    summary:
      'Watches AWS accounts, explains what it finds, and either fixes the problem or asks a person to approve the fix.',
    tags: ['AWS', 'Agents', 'Next.js'],
    href: 'https://github.com/viknesh6697/auto-control-plane-aws',
    image: '/projects/aws-overview.png',
    imageAlt: 'Overview dashboard with sandbox and production incidents, actions, and pending approvals',
    imageRatio: '787 / 522',
    extraImage: '/projects/aws-incident.png',
    extraImageAlt: 'Incident detail for a world-open SSH rule, with evidence and a proposed revoke plan',
    extraImageRatio: '1440 / 900',
  },
]

export const experience: ExperienceRole[] = [
  {
    id: '01',
    title: 'Senior Associate, Gen AI Engineer',
    org: 'PwC',
    location: 'Bangalore',
    dates: 'Apr 2025 – Present',
    summary: 'Enterprise RAG on Bedrock: ingestion, hybrid search, and executive chat.',
  },
  {
    id: '02',
    title: 'AI Technical Lead',
    org: 'Digimaxx AI Solutions',
    location: 'Bangalore',
    dates: 'Jun 2024 – Mar 2025',
    summary: 'Multi-agent research and campaign systems.',
  },
  {
    id: '03',
    title: 'Team Lead',
    org: 'Straive',
    location: 'Chennai',
    dates: 'Jun 2022 – Apr 2024',
    summary: 'LLM retrieval, real-time AWS pipelines, and six-person delivery.',
  },
  {
    id: '04',
    title: 'Senior Software Developer',
    org: 'Straive',
    location: 'Chennai',
    dates: 'Apr 2021 – Jun 2022',
    summary: 'Higher-throughput pipelines and document extraction.',
  },
  {
    id: '05',
    title: 'Software Developer',
    org: 'Tivona Global Technologies',
    location: 'Chennai',
    dates: 'Nov 2019 – Mar 2021',
    summary: 'Django APIs, payments, and IoT monitoring.',
  },
]

export const education = ''
