import * as React from 'react';

export interface NoteEditorProps {
  content: (string | null);
}

function NoteEditor({ content }: NoteEditorProps): JSX.Element {
  return (
    <textarea
      rows={25}
      cols={80}
      value={content || 'No note selected'}
    />
  );
}

export default NoteEditor;
