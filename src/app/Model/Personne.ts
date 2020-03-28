export class Personne {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  path: string;
  cin: string;
  job: string;

  constructor(id, firstName = '', lastName = '', age = 0, path = '', cin = 'A', job = '') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }



}
