import type { APISpaceXTypes, Doc } from '../types/api';

export const getLaunches = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/launches/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: 'asc',
        },
        limit: 100,
      },
    }),
  });
  const { docs: launches } = (await response.json()) as APISpaceXTypes;
  return launches;
};

export const getLaunchById = async (id: string) => {
  const response = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
  const launch = (await response.json()) as Doc;
  console.log(launch);
  return launch;
};
