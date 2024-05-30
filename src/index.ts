enum Position {
  Professor,
  AssociateProfessor,
  AssistantProfessor,
  Lecturer,
  Adjunct,
}

interface Contact {
  email: string;
  phone?: string;
}

interface Lecturer {
  name: string;
  surname: string;
  position: Position;
  company: string;
  experience: number;
  courses: string[];
  contacts: Contact;
}

interface Grade {
  workName: string;
  mark: number;
}

interface Visit {
  lesson: string;
  present: boolean;
}

class School {
  private _areas: Area[] = [];
  private _lecturers: Lecturer[] = [];

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  addArea(area: Area): void {
    this._areas.push(area);
  }

  removeArea(areaName: string): void {
    this._areas = this._areas.filter(area => area.name !== areaName);
  }

  addLecturer(lecturer: Lecturer): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturerName: string): void {
    this._lecturers = this._lecturers.filter(lecturer => lecturer.name !== lecturerName);
  }
}

class Area {
  private _levels: Level[] = [];
  private _name: string;

  get name(): string {
    return this._name;
  }

  get levels(): Level[] {
    return this._levels;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: Level): void {
    this._levels.push(level);
  }

  removeLevel(levelName: string): void {
    this._levels = this._levels.filter(level => level.name !== levelName);
  }
}

class Level {
  private _groups: Group[] = [];
  private _name: string;
  private _description: string;

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): Group[] {
    return this._groups;
  }

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  addGroup(group: Group): void {
    this._groups.push(group);
  }

  removeGroup(groupName: string): void {
    this._groups = this._groups.filter(group => group.directionName !== groupName);
  }
}

class Group {
  private _area: string;
  private _status: string;
  private _students: Student[] = [];
  private _directionName: string;
  private _levelName: string;

  get area(): string {
    return this._area;
  }

  get status(): string {
    return this._status;
  }

  get students(): Student[] {
    return this._students;
  }

  get directionName(): string {
    return this._directionName;
  }

  get levelName(): string {
    return this._levelName;
  }

  get name(): string {
    return `${this._directionName} - ${this._levelName}`;
  }

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
    this._area = '';
    this._status = '';
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  removeStudent(fullName: string): void {
    this._students = this._students.filter(student => student.fullName !== fullName);
  }

  setStatus(status: string): void {
    this._status = status;
  }

  showPerformance(): Student[] {
    const sortedStudents = [...this._students].sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}

class Student {
  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: Grade[] = [];
  private _visits: Visit[] = [];

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  get grades(): Grade[] {
    return this._grades;
  }

  get visits(): Visit[] {
    return this._visits;
  }

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  setGrade(workName: string, mark: number): void {
    const grade = this._grades.find(g => g.workName === workName);
    if (grade) {
      grade.mark = mark;
    } else {
      this._grades.push({ workName, mark });
    }
  }

  setVisit(lesson: string, present: boolean): void {
    const visit = this._visits.find(v => v.lesson === lesson);
    if (visit) {
      visit.present = present;
    } else {
      this._visits.push({ lesson, present });
    }
  }

  getPerformanceRating(): number {
    const gradeValues = this._grades.map(grade => grade.mark);

    if (!gradeValues.length) return 0;

    const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage = (this._visits.filter(visit => visit.present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
