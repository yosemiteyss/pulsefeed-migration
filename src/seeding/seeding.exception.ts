/**
 * Error to throw when seeding fails.
 */
export class SeedingException extends Error {
  constructor(override readonly message: string) {
    super();
  }
}
