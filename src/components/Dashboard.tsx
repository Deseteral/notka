import * as React from 'react';
import styled from 'styled-components';
import { RepositoryData, NoteID, Note } from '../domain';
import DirectoryTree from './DirectoryTree';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

interface DashboardProps {
  repoData: RepositoryData;
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const Column = styled.div<{ width: number }>`
  flex: ${props => props.width};
  border-right: 1px solid grey;
  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: flex .3s ease-in-out;

  &:last-of-type {
    border-right: none;
  }
`;

function Dashboard({ repoData } : DashboardProps) : JSX.Element {
  const [selectedDir, setSelectedDir] = React.useState('root');
  const [selectedNote, setSelectedNote] = React.useState<NoteID | null>(null);

  const selectedNoteContent = selectedNote
    ? (repoData.notes.find(note => note.id === selectedNote) as Note).content
    : null;

  const [size, setSize] = React.useState(1);

  const handleSwipeGesture = (e: React.UIEvent<HTMLDivElement>) => {
    console.log(e.target.scrollY);
  };

  return (
    <DashboardContainer>
      <Column width={size} onClick={() => setSize(Math.abs(size - 1))} onScroll={handleSwipeGesture}>
        <DirectoryTree
          directories={repoData.directories}
          onDirectoryClick={setSelectedDir}
        />
      </Column>
      <Column width={1}>
        <NoteList
          notes={repoData.notes.filter(note => note.parent === selectedDir)}
          onNoteClick={setSelectedNote}
        />
      </Column>
      <Column width={2}>
        <NoteEditor content={selectedNoteContent} />
      </Column>
    </DashboardContainer>
  );
}

export default Dashboard;
