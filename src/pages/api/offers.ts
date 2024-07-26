import type { NextApiRequest, NextApiResponse } from 'next';

import type { Offer } from '@/types/offer';

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options

const generateRandomJobs = () => {
  const titles = [
    'Senior Specialist in Rocket Propellant Extraction',
    'Master of Shockwave Smoothing',
    'Chief Oscillation Coordinator',
    'Lead Rapid Disassembly Engineer - fireproof certificate required',
    'Head Conductor of Atmospheric Disturbances',
  ];

  const companies = [
    'RocketFuel Inc.',
    'WaveTech Corp.',
    'Orbital Ventures',
    'AstroDynamics Ltd.',
    'Nebula Systems',
  ];

  const locations = [
    'Cape Canaveral',
    'Vandenberg Air Force Base',
    'Kennedy Space Center',
    'Jet Propulsion Laboratory',
    'Johnson Space Center',
  ];

  const categories = [
    'Fuel Management',
    'Wave Dynamics',
    'Atmospheric Engineering',
  ];
  const jobs = [];

  for (let i = 1; i <= 20; i += 1) {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const company = companies[Math.floor(Math.random() * companies.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const date = `Od ${String(Math.floor(Math.random() * 28 + 1)).padStart(2, '0')}.${String(Math.floor(Math.random() * 12 + 1)).padStart(2, '0')}.2024`;
    const salary = `${Math.floor(Math.random() * 40000) + 1} €`;
    const category = categories[Math.floor(Math.random() * categories.length)];

    const job = {
      id: i,
      title: title || titles[1],
      company: company || companies[1],
      location: location || locations[1],
      date,
      salary,
      category: category || categories[1],
    };

    jobs.push(job);
  }

  return jobs as Offer[];
};

const offers = generateRandomJobs();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(offers);
}
