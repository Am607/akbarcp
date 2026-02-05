import { ExperienceCardProps } from "@/components/experience/experience-card";

export const experiences: Omit<ExperienceCardProps, 'index'>[] = [
    {
        company: 'Lascade',
        role: 'Senior Flutter Developer',
        period: 'Jun 2024 - Present',
        location: 'Kochi, Kerala, India',
        description: 'Spearheading the mobile development for MarineRadar, a real-time vessel tracking application. Leveraging AIS and satellite data to track over 1 million ships worldwide.',
        technologies: ['Flutter', 'Dart', 'Google Maps API', 'Socket.io', 'REST APIs', 'DevOps'],
        color: '#3b82f6', // Indigo/Blue
        links: [
            { label: 'MarineRadar (Android)', url: 'https://play.google.com/store/apps/details?id=com.lascade.marinetracker&hl=en_IN' },
            { label: 'MarineRadar (iOS)', url: 'https://apps.apple.com/in/app/marineradar-vessel-finder/id6560109315' },
        ],
    },
    {
        company: 'Eduport Pvt Ltd',
        role: 'Flutter Developer',
        period: 'Aug 2022 - Jun 2024',
        location: 'Kochi, Kerala, India',
        description: 'Key contributor to Kerala’s leading EdTech platform. Built the Eduport Learning App featuring "Eduport Adapt" AI for personalized learning and gamified student engagement.',
        technologies: ['Flutter', 'Firebase', 'Clean Architecture', 'Video Streaming', 'Analytics'],
        color: '#f97316', // Orange
        links: [
            { label: 'Eduport Web', url: 'https://web.eduport.app/' },
            { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.irah.eduportlms&hl=en_IN' },
            { label: 'App Store', url: 'https://apps.apple.com/in/app/eduport-sslc-11-12-science/id6443499408' },
        ],
    },
    {
        company: 'Freelance',
        role: 'Flutter Developer',
        period: 'Mar 2020 - Apr 2022',
        location: 'Remote',
        description: 'Delivered high-quality mobile applications for diverse clients on Fiverr. Managed the entire development lifecycle from requirement gathering to app store deployment.',
        technologies: ['Flutter', 'Firebase', 'UI/UX Design', 'API Integration'],
        color: '#10b981', // Emerald/Green
        links: [],
    },
];
