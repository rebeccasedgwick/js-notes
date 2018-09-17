(function(exports) {
  function noteListTest() {};
    noteListTest.prototype.test = function(noteList) {
      if (noteList.list.length === 0) {
        console.log("new empty note list") 
      }
      else {
        throw Error("Note list not right")
      }
    }
  exports.noteListTest = noteListTest;
})(this);