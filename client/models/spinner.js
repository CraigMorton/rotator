var Spinner = function(students, teams) {
  this.students = students;
  this.teams = teams;
  this.currentTeam = 0;
  this.slots = [];
  this.populate();
}

Spinner.prototype = {
  initSlots: function() {
    var currentTeam = this.teams[this.currentTeam];
    for (var student of currentTeam) {
      this.slots.push([]);
    }
  },

  insertTeam: function() {
    var currentTeam = this.teams[this.currentTeam];
    for (var student of currentTeam) {
      var slot = this.slots[currentTeam.indexOf(student)];
      slot.push(student);
    }
  },

  getRandomStudent: function() {
    var randomIndex = Math.floor(Math.random() * this.students.length);
    var randomStudent = this.students[randomIndex];
    return randomStudent;
  },

  insertRandomStudents: function() {
    for (var slot of this.slots) {
      for (var i = 0; i < 5; i++) {
        var randomStudent = this.getRandomStudent();
        slot.push(randomStudent);
      }
    }
  },

  populate: function() {
    this.initSlots();
    this.insertRandomStudents();
    this.insertTeam();
    this.currentTeam++;
  }
}

module.exports = Spinner;
