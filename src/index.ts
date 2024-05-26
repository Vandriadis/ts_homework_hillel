class School {
    directions: Direction[] = [];
  
    addDirection(direction: Direction) {
      this.directions.push(direction);
    }
  }
  
  class Direction {
    private _name: string;
    levels: Level[] = [];
  
    constructor(name: string) {
      this._name = name;
    }
  
    get name(): string {
      return this._name;
    }
  
    addLevel(level: Level) {
      this.levels.push(level);
    }
  }
  
  class Level {
    private _program: string;
    groups: Group[] = [];
  
    constructor(public name: string, program: string) {
      this._program = program;
    }
  
    get program(): string {
      return this._program;
    }
  
    addGroup(group: Group) {
      this.groups.push(group);
    }
  }
  
  class Group {
    private _students: Student[] = [];
  
    constructor(public directionName: string, public levelName: string) {}
  
    get students(): Student[] {
      return this._students;
    }
  
    addStudent(student: Student) {
      this._students.push(student);
    }
  
    showPerformance(): Student[] {
      const sortedStudents = this.students.sort(
        (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
      );
  
      return sortedStudents;
    }
  }
  
  class Student {
    grades: { [subject: string]: number } = {};
    attendance: boolean[] = [];
  
    constructor(public firstName: string, public lastName: string, public birthYear: number) {}
  
    get fullName(): string {
      return `${this.lastName} ${this.firstName}`;
    }
  
    set fullName(value: string) {
      [this.lastName, this.firstName] = value.split(" ");
    }
  
    get age(): number {
      return new Date().getFullYear() - this.birthYear;
    }
  
    setGrade(subject: string, grade: number) {
      this.grades[subject] = grade;
    }
  
    markAttendance(present: boolean) {
      this.attendance.push(present);
    }
  
    getPerformanceRating(): number {
      const gradeValues = Object.values(this.grades);
  
      if (gradeValues.length === 0) return 0;
  
      const averageGrade =
        gradeValues.reduce((sum: number, grade: number): number => sum + grade, 0) / gradeValues.length;
  
      const attendancePercentage =
        (this.attendance.filter((present) => present).length /
          this.attendance.length) *
        100;
  
      return (averageGrade + attendancePercentage) / 2;
    }
  }
  