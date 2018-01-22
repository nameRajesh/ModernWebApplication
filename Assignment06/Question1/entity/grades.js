'use strict';

let grades = [];

class GradeManager{
  indexOf(id) {
    for(let i in grades) {
      if(grades[i].id == id)
        return i;
    }
    return null;
  }
  add(obj) {
    grades.push(obj);
  }
  delete(id) {
    let index = this.indexOf(id);
    if(index != null) {
      grades.splice(index, 1);
    } else {
      return null;
    }
  }
  modify(obj) {
    let index = this.indexOf(obj.id);
    if(index != null) {
      grades[index] = obj;
      return grades[index];
    } else {
      return null;
    }
  }        
  getGrades() {
    return grades;
  }
  getGradesById(id) {
    if(grades[this.indexOf(id)] == null) return null;
    return grades[this.indexOf(id)];
  }

}

module.exports = GradeManager;