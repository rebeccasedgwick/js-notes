(function(exports) {
  function createNoteTest() {};
    createNoteTest.prototype.test = function(note) {
      console.log(note.body);
      if (note.body !== 'hello') {
        throw new Error('Note not stored correctly');
      }
      else console.log('I think it passed - createNoteTest')
    }
  exports.createNoteTest = createNoteTest;
})(this);

(function(exports) {
  function displayNoteTest() {};
  displayNoteTest.prototype.test = function(note) {
    if (note.getNoteBody() !== 'hello') {
      throw new Error("Unable to display note body");
    }
    else console.log('I think it passed -displayNoteTest')
  }
  exports.displayNoteTest = displayNoteTest;
})(this);
