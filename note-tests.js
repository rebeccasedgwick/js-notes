// note-tests.js

(function(exports) {
  function createNoteTest() {
    var note = new Note('hello');

    if (note.body !== 'hello') {
      throw new Error("Note not stored correctly");
    }
  };

  createNoteTest();

  function displayNoteTest() {
    var note = new Note('hello');
    if (note.getNoteBody() !== 'hello') {
      throw new Error("Note body not found");
    }
  };

  displayNoteTest();
})(this);
