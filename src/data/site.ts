export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  role: string
  blurb: string
  links: ProjectLink[]
}

export type TimelineItem = {
  title: string
  org: string
  period: string
  detail?: string
}

export type NavItem = {
  label: string
  href: string
  /** Hidden on small screens to keep the navbar uncluttered */
  primary?: boolean
}

export const site = {
  name: 'Aoping Lyu',
  shortName: 'Aoping Lyu',
  title: 'Full-stack engineer · AI enthusiast · Data analyst',
  tagline:
    'Building web platforms, data-driven tools, and cloud systems — with a strong interest in applied AI. Currently at the International Telecommunication Union.',
  bio: `I'm a full-stack engineer and AI enthusiast with a background in computational science and aerospace engineering. At ITU I contribute to connectivity planning and digital public infrastructure tools: React interfaces, geospatial and data workflows, and cloud-hosted applications. I enjoy turning data and models into practical products that hold up in real use.`,
  focus: [
    'React & full-stack web',
    'Data & applied AI',
    'Cloud platforms',
    'Geospatial / analytics workflows',
  ],
  // Prefer LinkedIn publicly; email stays off the site to reduce spam.
  github: 'https://github.com/LvAoping',
  linkedin: 'https://www.linkedin.com/in/aopinglyu',
  location: 'Switzerland',
  nav: [
    { label: 'About', href: '#about', primary: true },
    { label: 'Work', href: '#work', primary: true },
    { label: 'Education', href: '#education' },
    { label: 'Service', href: '#volunteering' },
    { label: 'Contact', href: '#contact', primary: true },
  ] as NavItem[],
  projects: [
    {
      title: 'Connectivity planning tools',
      role: 'Full-stack · ITU',
      blurb:
        'React dashboards and UI for connectivity planning — visualization, user flows, and onboarding, with support for geospatial analysis workflows.',
      links: [],
    },
    {
      title: 'GovStack-related dashboard',
      role: 'Full-stack · ITU',
      blurb:
        'Cloud-hosted dashboard with authentication, APIs, and managed data storage for digital public infrastructure tooling.',
      links: [],
    },
    {
      title: 'Infrastructure optimization',
      role: 'Python · ITU',
      blurb:
        'Optimization workflows on a cloud analytics platform for infrastructure placement, coverage, and resource allocation scenarios.',
      links: [],
    },
    {
      title: 'Communication-efficient object detection',
      role: 'Master thesis · Uppsala University',
      blurb:
        'Model compression in federated learning for 2D object detection in vehicular networks, evaluated on public driving datasets.',
      links: [],
    },
  ] as Project[],
  education: [
    {
      title: 'MSc, Computational Science',
      org: 'Uppsala University',
      period: '2022 – 2025',
      detail:
        'Department of Information Technology. Thesis on communication-efficient object detection for vehicular applications.',
    },
    {
      title: 'BEng (Hons), Aerospace Engineering',
      org: 'University of Nottingham',
      period: '2020 – 2022',
    },
    {
      title: 'BEng (Hons), Aerospace Engineering',
      org: 'University of Nottingham Ningbo China',
      period: '2018 – 2020',
    },
    {
      title: 'Winter Programme — Science & Innovation',
      org: 'University of Oxford',
      period: '2020',
      detail: 'Interdisciplinary science and innovation programme.',
    },
  ] as TimelineItem[],
  volunteering: [
    {
      title: 'Program Student Representative',
      org: 'Uppsala Union of Science and Technology Students',
      period: 'Aug 2023 – Dec 2024',
      detail:
        'Second-year representative for the Master’s programme in Computational Science.',
    },
    {
      title: 'Teaching Assistant',
      org: 'Uppsala University — Computer Programming II',
      period: 'Aug 2024 – Dec 2024',
      detail:
        'Seminars and tutorials, assignment grading, student support, and project supervision (Python and C++).',
    },
  ] as TimelineItem[],
}
