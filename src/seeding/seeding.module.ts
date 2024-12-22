import {
  ArticleCategoryRepository,
  CacheModule,
  DatabaseModule,
  LanguageRepository,
} from '@pulsefeed/common';
import { SeedingService } from './seeding.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, CacheModule],
  providers: [SeedingService, LanguageRepository, ArticleCategoryRepository],
  exports: [SeedingService],
})
export class SeedingModule {}
