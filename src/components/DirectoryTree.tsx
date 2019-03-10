import * as React from 'react';
import styled from 'styled-components';
import { DirectoryID, Directory } from '../domain';

interface DirectoryTreeProps {
  directories: Directory[],
  onDirectoryClick: (id: DirectoryID) => void
}

const TreeWrapper = styled.div`
  padding: 16px;
`;

const List = styled.div<{ top: boolean }>`
  padding-left: ${props => (props.top ? '0' : '26px')};
`;

const ListElement = styled.div`
  cursor: pointer;
`;

function renderNode(
  currentDir: Directory,
  childDirs: Directory[],
  dirs: Directory[],
  onDirectoryClick: (id: DirectoryID) => void,
) {
  return (
    <ListElement key={currentDir.id}>
      {currentDir.name && (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div onClick={() => onDirectoryClick(currentDir.id)}>
          {currentDir.name}
        </div>
      )}
      {(childDirs.length > 0) && (
        <List top={currentDir.id === 'root'}>
          {childDirs.map(child => (
            renderNode(child, dirs.filter(d => d.parent === child.id), dirs, onDirectoryClick)
          ))}
        </List>
      )}
    </ListElement>
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
    <TreeWrapper>
      {renderNode(rootDir, rootDirs, directories, onDirectoryClick)}
    </TreeWrapper>
  );
}

export default DirectoryTree;
