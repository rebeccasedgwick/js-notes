// note-tests.js

(function(exports) {
  function createNoteTest() {
    var note = new Note('hello');

    if (note.body !== 'hello') {
      throw new Error("Note not stored correctly");
    }
  };

  createNoteTest();
})(this);
