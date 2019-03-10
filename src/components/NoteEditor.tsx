import * as React from 'react';

export interface NoteEditorProps {
  content: string;
}

function NoteEditor({ content }: NoteEditorProps): JSX.Element {
  return (
    <textarea
      rows={25}
      cols={80}
    >
      {content}
    </textarea>
  );
}

export default NoteEditor;
