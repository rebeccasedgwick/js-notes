(function(exports) {
  function noteListTest() {};
    noteListTest.prototype.test = function() {
      var l1 = new NoteList();
      console.log(l1.list)
      if (l1.list.length === 0) {
        console.log("new empty note list") 
      }
      else {
        throw Error("Note list not right")
      }
    }
  exports.noteListTest = noteListTest;
})(this);