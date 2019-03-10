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
  width: 100%;
`;

const Column = styled.div<{ width: number }>`
  flex: ${props => props.width};
  border-right: 1px solid grey;

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

  return (
    <DashboardContainer>
      <Column width={1}>
        <DirectoryTree
          directories={repoData.directories}
          onDirectoryClick={id => setSelectedDir(id)}
        />
      </Column>
      <Column width={1}>
        <NoteList
          notes={repoData.notes.filter(note => note.parent === selectedDir)}
          onNoteClick={id => setSelectedNote(id)}
        />
      </Column>
      <Column width={3}>
        <NoteEditor content={selectedNoteContent} />
      </Column>
    </DashboardContainer>
  );
}

export default Dashboard;
