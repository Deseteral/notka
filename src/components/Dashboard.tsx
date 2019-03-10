import * as React from 'react';
import { RepositoryData, Directory } from '../domain';

interface DashboardProps {
  repoData: RepositoryData;
}

function renderNode(currentDir: Directory, childDirs: Directory[], dirs: Directory[]) {
  const WrapperNode: (props: any) => JSX.Element = currentDir.id === 'root'
    ? props => <div {...props} />
    : props => <li {...props} />;

  return (
    <WrapperNode key={currentDir.id}>
      {currentDir.name && currentDir.name}
      {(childDirs.length > 0) && (
        <ul>
          {childDirs.map(child => (
            renderNode(child, dirs.filter(d => d.parent === child.id), dirs)
          ))}
        </ul>
      )}
    </WrapperNode>
  );
}

function Dashboard({ repoData } : DashboardProps) : JSX.Element {
  const rootDirs = repoData.directories.filter(directory => directory.parent === 'root');

  const rootDir: Directory = {
    id: 'root',
    name: '',
    parent: '',
  };

  return (
    <div>
      {renderNode(rootDir, rootDirs, repoData.directories)}
    </div>
  );
}

export default Dashboard;
