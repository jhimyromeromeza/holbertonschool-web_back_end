export default class HolbertonCourse {
  constructor(name, length, students) {
    if(typeof(name) !== 'string') {
      throw TypeError('Name must be a string')
    }
    if(typeof(length) !== 'number') {
      throw TypeError('Length must be a number')
    }
    if(!Array.isArray(students) || students.some(student => typeof(student) !== 'string')){
      throw TypeError('Students must be an array of strings')
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name(){
    return this._name;
  }
  set name(newname){
    if(typeof(newname) !== 'string'){
      throw TypeError('Name must be a string')
    }
    this._name = newname;
  }
  get length (){
    return this._length;
  }
  set length(newlength){
    if(typeof(newlength) !== 'number'){
      throw TypeError('Length must be a number')
    }
    this._length = newlength;
  }
  get students(){
    return this._students;
  }
  set students(newstudent){
    if(!Array.isArray(newstudent) || students.some(student => typeof(student) !== 'string')) {
      throw TypeError('Students must be an array of strings')
    }
    this.students = newstudent;
  }
}
