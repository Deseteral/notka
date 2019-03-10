import * as React from 'react';
import { Note } from '../domain';

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) : JSX.Element {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          {note.name}
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
