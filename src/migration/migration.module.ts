import { MigrationService } from './migration.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [MigrationService],
  exports: [MigrationService],
})
export class MigrationModule {}
