type DirectoryID = string;
interface Directory {
  id: DirectoryID;
  name: string;
  parent: DirectoryID;
}

type NoteID = string;
interface Note {
  id: NoteID;
  name: string;
  parent: DirectoryID;
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
