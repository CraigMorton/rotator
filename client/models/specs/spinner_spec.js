var students = require('../../../data/students.js');
var teams = require('../../../data/teams.js');

var Spinner = require('../spinner.js');
var assert = require('assert');

Spinner.prototype.getRandomStudent = function() {
  return 'jeff';
}

describe('Spinner', function() {
  var spinner;

  beforeEach(function() {
    spinner = new Spinner(students, teams);
  });

  it('current team should be set to one', function() {
    assert.equal(1, spinner.currentTeam);
  });

  it('should init with an empty array of slots', function() {
    assert.deepEqual(4, spinner.slots.length);
  });

  // it('should init slots with 4 empty arrays', function() {
  //   spinner.initSlots();
  //   assert.deepEqual([], spinner.slots[0]);
  //   assert.deepEqual([], spinner.slots[1]);
  //   assert.deepEqual([], spinner.slots[2]);
  //   assert.deepEqual([], spinner.slots[3]);
  // });

  // it('should return a "random" student', function() {
  //   assert.equal('jeff', spinner.getRandomStudent());
  // });

  // it('should insert team members', function() {
  //   spinner.initSlots();
  //   spinner.insertTeam();
  //   assert.equal('adrian', spinner.slots[0][0]);
  //   assert.equal('alex', spinner.slots[1][0]);
  //   assert.equal('bertie', spinner.slots[2][0]);
  //   assert.equal('bobby', spinner.slots[3][0]);
  // });

  // it('should insert 5 random students', function() {
  //   spinner.initSlots();
  //   spinner.insertRandomStudents();
  //   assert.equal('jeff', spinner.slots[0][3]);
  // });


  // for(i = 0; i< 5000; i++) {
  //   it('is true', function() {
  //     assert.equal(true, true);
  //   });
  // }
});
