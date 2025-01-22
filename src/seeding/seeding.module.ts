import { ArticleCategoryRepository, LanguageRepository } from '@pulsefeed/common';
import { SeedingService } from './seeding.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [SeedingService, LanguageRepository, ArticleCategoryRepository],
  exports: [SeedingService],
})
export class SeedingModule {}
