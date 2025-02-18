import { RepositoryModule } from '@pulsefeed/common';
import { SeedingService } from './seeding.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [RepositoryModule],
  providers: [SeedingService],
  exports: [SeedingService],
})
export class SeedingModule {}
