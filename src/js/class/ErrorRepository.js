export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Long name');
    this.errors.set(2, 'Limit soldiers');
    this.errors.set(3, 'Safe shield is broken');
  }

  translate(code) {
    if (this.errors.has(code)) return this.errors.get(code);
    return 'Unknown error';
  }
}
