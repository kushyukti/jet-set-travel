class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
    // this.stack = <call stack>;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

export default ValidationError;
