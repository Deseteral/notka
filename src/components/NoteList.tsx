import * as React from 'react';
import { Note, NoteID } from '../domain';

interface NoteListProps {
  notes: Note[];
  onNoteClick: (id: NoteID) => void;
}

function NoteList({ notes, onNoteClick }: NoteListProps) : (JSX.Element | null) {
  if (notes.length === 0) return null;

  return (
    <ul>
      {notes.map(note => (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
        <li onClick={() => onNoteClick(note.id)} key={note.id}>
          {note.name}
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
