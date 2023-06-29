export class InternalException extends Error {
  constructor(
    public readonly message: string,
    public readonly code: number = 500,
    public readonly description?: string,
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
