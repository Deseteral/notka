import * as React from 'react';
import { DirectoryID, Directory } from '../domain';

interface DirectoryTreeProps {
  directories: Directory[],
  onDirectoryClick: (id: DirectoryID) => void
}

function renderNode(
  currentDir: Directory,
  childDirs: Directory[],
  dirs: Directory[],
  onDirectoryClick: (id: DirectoryID) => void,
) {
  const WrapperNode: (props: any) => JSX.Element = currentDir.id === 'root'
    ? props => <div {...props} />
    : props => <li {...props} />;

  return (
    <WrapperNode key={currentDir.id}>
      {currentDir.name && (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div onClick={() => onDirectoryClick(currentDir.id)}>
          {currentDir.name}
        </div>
      )}
      {(childDirs.length > 0) && (
        <ul>
          {childDirs.map(child => (
            renderNode(child, dirs.filter(d => d.parent === child.id), dirs, onDirectoryClick)
          ))}
        </ul>
      )}
    </WrapperNode>
  );
}

function DirectoryTree({ directories, onDirectoryClick } : DirectoryTreeProps) : JSX.Element {
  const rootDirs = directories.filter(directory => directory.parent === 'root');

  const rootDir: Directory = {
    id: 'root',
    name: '',
    parent: '',
  };

  return (
    <div>
      {renderNode(rootDir, rootDirs, directories, onDirectoryClick)}
    </div>
  );
}

export default DirectoryTree;
