// const validator = require('validator');
const yargs = require('yargs');
const { addNote, readNote, listNotes, removeNote } = require('./notes.js');
const { redText } = require('./utils.js');

// customize yargs version
yargs.version('1.1.0');

// Add command alternate
yargs.command(
  ['add', 'a'],
  'Add a note',
  {
    title: { alias: 't', describe: 'Note title', demandOption: true, type: 'string' },
    body: { alias: 'b', describe: 'Note body', demandOption: true, type: 'string' },
  },
  argv => {
    const { title, body } = argv;
    if (title.length < 1 || body.length < 1) {
      console.log(redText('Missing title or body'));
      process.exit(1);
    }
    addNote(title, body);
  },
);

// Remove command
yargs.command(['remove', 'rm'], 'Removes a note', { title: { alias: 't', describe: 'Title note', demandOption: true, type: 'string' } }, argv => {
  removeNote(argv.title);
});

// List command
yargs.command(['ls', 'list'], 'Lists all notes', {}, () => {
  listNotes();
});

// Read command
yargs.command(
  ['r', 'read'],
  'Reads a note',
  {
    title: { alias: 't', describe: 'Title note', demandOption: true, type: 'string' },
  },
  argv => {
    readNote(argv.title);
  },
);

yargs.parse();
