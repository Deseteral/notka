import * as React from 'react';
import styled from 'styled-components';
import { Note, NoteID } from '../domain';

interface NoteListProps {
  notes: Note[];
  onNoteClick: (id: NoteID) => void;
}

const List = styled.ul`
  margin: 0;
  padding: 8px;
  list-style: none;
`;

const ListElement = styled.li`
  border-bottom: 1px solid grey;
  margin-bottom: 8px;
  padding: 4px;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }
`;

const NoteHeading = styled.div`
  font-size: 20px;
  font-family: 'Josefin Sans', sans-serif;
`;

const NoteSubtitle = styled.div`
  font-size: 12px;
  color: gray;
`;

function NoteList({ notes, onNoteClick }: NoteListProps) : (JSX.Element | null) {
  if (notes.length === 0) return null;

  return (
    <List>
      {notes.map(note => (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
        <ListElement onClick={() => onNoteClick(note.id)} key={note.id}>
          <NoteHeading>{note.name}</NoteHeading>
          <NoteSubtitle>{note.content}</NoteSubtitle>
        </ListElement>
      ))}
    </List>
  );
}

export default NoteList;
