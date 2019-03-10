import * as React from 'react';
import { RepositoryData, NoteID, Note } from '../domain';
import DirectoryTree from './DirectoryTree';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

interface DashboardProps {
  repoData: RepositoryData;
}

function Dashboard({ repoData } : DashboardProps) : JSX.Element {
  const [selectedDir, setSelectedDir] = React.useState('root');
  const [selectedNote, setSelectedNote] = React.useState<NoteID | null>(null);

  const selectedNoteContent = selectedNote
    ? (repoData.notes.find(note => note.id === selectedNote) as Note).content
    : null;

  return (
    <div>
      <DirectoryTree
        directories={repoData.directories}
        onDirectoryClick={id => setSelectedDir(id)}
      />
      <NoteList
        notes={repoData.notes.filter(note => note.parent === selectedDir)}
        onNoteClick={id => setSelectedNote(id)}
      />
      <NoteEditor content={selectedNoteContent} />
    </div>
  );
}

export default Dashboard;
