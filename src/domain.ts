type DirectoryID = string;
type NoteID = string;

interface Directory {
  id: DirectoryID;
  name: string;
  parent: DirectoryID;
}

interface Note {
  id: NoteID;
  name: string;
  parent: DirectoryID;
  content: string;
}

interface RepositoryData {
  directories: Directory[];
  notes: Note[];
}

export {
  DirectoryID,
  Directory,
  NoteID,
  Note,
  RepositoryData,
};
