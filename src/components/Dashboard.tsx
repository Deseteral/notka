import * as React from 'react';
import { RepositoryData } from '../domain';
import DirectoryTree from './DirectoryTree';

interface DashboardProps {
  repoData: RepositoryData;
}

function Dashboard({ repoData } : DashboardProps) : JSX.Element {
  return (
    <div>
      <DirectoryTree directories={repoData.directories} />
    </div>
  );
}

export default Dashboard;
