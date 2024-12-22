import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class MigrationService {
  constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService) {}

  /**
   * Run prisma migration command.
   */
  async runMigration() {
    try {
      this.logger.log('Running Prisma migrations...', MigrationService.name);
      const { stdout, stderr } = await execAsync('npm run prisma:migration');
      if (stdout) this.logger.log(`Migrations output: ${stdout}`, MigrationService.name);
      if (stderr) this.logger.log(`Migrations errors: ${stderr}`, MigrationService.name);
      this.logger.log('Migrations completed successfully!', MigrationService.name);
    } catch (error) {
      this.logger.error('Error running migrations:', error.stack, MigrationService.name);
      throw error;
    }
  }
}
