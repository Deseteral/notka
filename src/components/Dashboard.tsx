import * as React from 'react';
import { RepositoryData, DirectoryID } from '../domain';
import DirectoryTree from './DirectoryTree';

interface DashboardProps {
  repoData: RepositoryData;
}

function Dashboard({ repoData } : DashboardProps) : JSX.Element {
  const [selectedDir, setSelectedDir] = React.useState('root');

  return (
    <div>
      <DirectoryTree
        directories={repoData.directories}
        onDirectoryClick={(id: DirectoryID) => setSelectedDir(id)}
      />
      {selectedDir}
    </div>
  );
}

export default Dashboard;
