export default class HolbertonCourse {
  constructor(name, length, students) {
    this._checkType(name, 'string', 'Name');
    this._checkType(length, 'number', 'Length');
    this._checkType(students, 'array', 'Students');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
