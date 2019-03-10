import * as React from 'react';
import NoNoteFallback from './NoNoteFallback';

export interface NoteEditorProps {
  content: (string | null);
}

function NoteEditor({ content }: NoteEditorProps): JSX.Element {
  return content
    ? (
      <textarea
        rows={25}
        cols={80}
        value={content || 'No note selected'}
      />
    )
    : (
      <NoNoteFallback />
    );
}

export default NoteEditor;
