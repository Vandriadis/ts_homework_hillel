class School {
  directions: Direction[] = [];

  addDirection(direction: Direction): void {
    this.directions.push(direction);
  }
}

class Direction {
  private _name: string;
  levels: Level[] = [];

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: Level): void {
    this.levels.push(level);
  }
}

class Level {
  private _program: string;
  groups: Group[] = [];

  get program(): string {
    return this._program;
  }

  constructor(
    public name: string,
    program: string
  ) {
    this._program = program;
  }

  addGroup(group: Group): void {
    this.groups.push(group);
  }
}

class Group {
  private _students: Student[] = [];

  get students(): Student[] {
    return this._students;
  }

  constructor(
    public directionName: string,
    public levelName: string
  ) {}

  addStudent(student: Student): void {
    this._students.push(student);
  }

  showPerformance(): Student[] {
    const sortedStudents = this.students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());

    return sortedStudents;
  }
}

class Student {
  grades: { [subject: string]: number } = {};
  attendance: boolean[] = [];

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  constructor(
    public firstName: string,
    public lastName: string,
    public birthYear: number
  ) {}

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum: number, grade: number): number => sum + grade, 0) / gradeValues.length;

    const attendancePercentage = (this.attendance.filter(present => present).length / this.attendance.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
