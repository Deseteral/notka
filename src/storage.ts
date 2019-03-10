import { RepositoryData } from './domain';

function read() : RepositoryData {
  return ({
    directories: [
      {
        id: 'd0',
        name: '🎈 Projects',
        parent: 'root',
      }, {
        id: 'd1',
        name: 'notka',
        parent: 'd0',
      }, {
        id: 'd2',
        name: 'pod notka',
        parent: 'd0',
      }, {
        id: 'd3',
        name: '⛰ Todos',
        parent: 'root',
      },
    ],
    notes: [
      {
        id: 'n0',
        name: '💥 My amazing note',
        parent: 'd1',
        // content: '# this is test note\nIt\'s really great! 🙉',
      }, {
        id: 'n1',
        name: 'Second note',
        parent: 'd1',
        // content: '# second\n>This is *second* great note!',
      },
    ],
  });
}

export {
  read,
};
