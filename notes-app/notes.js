const fs = require('fs');
const { greenText, redText, yellowText } = require('./utils.js');

const addNote = (title, body) => {
  const allNotes = loadNotes();
  const duplicate = allNotes.find(note => note.title === title);

  debugger;

  if (!duplicate) {
    allNotes.push({
      title,
      body,
    });
    console.log(yellowText(`Saving: "${title}"`));
    saveNotes(allNotes);
  } else {
    console.log(redText('Duplicate note!'));
  }
};

const readNote = (title) => {
  const allNotes = loadNotes();
  const selectedNote = allNotes.find(note => note.title === title);
  if (!selectedNote) {
    console.log(redText(' No such note exists '));
    return;
  }
  console.log('========================');
  console.log(`Title: ${selectedNote.title}`);
  console.log(`Body: ${selectedNote.body}`);
  console.log('========================');
};

const listNotes = () => {
  const allNotes = loadNotes();
  allNotes.forEach(note => {
    console.log('========================');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log('========================');
  });
};

const removeNote = (title) => {
  const allNotes = loadNotes();
  const noteToRemove = allNotes.find(note => note.title === title);
  if (!noteToRemove) {
    console.log(redText(' No such note found '));
    return;
  }
  console.log(yellowText(`Removing note: ${title}`));
  saveNotes(allNotes.filter(note => note !== noteToRemove));
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('./notes.json', 'utf-8'));
  } catch (err) {
    return [];
  }
};

const saveNotes = notesArray => {
  try {
    fs.writeFileSync('notes.json', JSON.stringify(notesArray, null, 2));
    console.log(greenText(' Done '));
  } catch (err) {
    console.log(redText('Something went wrong...'));
  }
};

module.exports = {
  addNote,
  readNote,
  listNotes,
  removeNote
};
