export class CoreError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "core error";
  }
}
