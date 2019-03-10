import * as React from 'react';
import RichTextEditor from 'react-rte';
import NoNoteFallback from './NoNoteFallback';

interface NoteEditorProps {
  content: (string | null);
}

function NoteEditor({ content }: NoteEditorProps): JSX.Element {
  if (!content) return (<NoNoteFallback />);

  const [currentContent, setCurrentContent] = React.useState(content);
  const [value, setValue] = React.useState(RichTextEditor.createValueFromString(content, 'markdown'));

  if (content !== currentContent) {
    setValue(RichTextEditor.createValueFromString(content, 'markdown'));
    setCurrentContent(content);
  }

  return (
    <RichTextEditor
      value={value}
      onChange={setValue}
    />
  );
}

export default NoteEditor;
