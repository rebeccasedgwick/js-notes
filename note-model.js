(function(exports) {
  function Note(text) {
    this.body = text;
  };

  Note.prototype.getNoteBody = function() {
    return this.body
  }

  exports.Note = Note;
})(this);
