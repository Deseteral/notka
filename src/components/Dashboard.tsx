import * as React from 'react';
import { RepositoryData, DirectoryID } from '../domain';
import DirectoryTree from './DirectoryTree';
import NoteList from './NoteList';

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
      <NoteList notes={repoData.notes.filter(note => note.parent === selectedDir)} />
    </div>
  );
}

export default Dashboard;
