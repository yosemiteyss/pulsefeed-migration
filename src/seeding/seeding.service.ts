import {
  ArticleCategoryEnum,
  ArticleCategoryRepository,
  Language,
  LanguageEnum,
  LanguageRepository,
} from '@pulsefeed/common';
import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { SeedingException } from './seeding.exception';

@Injectable()
export class SeedingService {
  constructor(
    private readonly languageRepository: LanguageRepository,
    private readonly categoryRepository: ArticleCategoryRepository,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService,
  ) {}

  /**
   * Seed initial data to db.
   */
  async runSeeding() {
    await this.seedLanguages();
    await this.seedCategories();
  }

  /**
   * Seed languages to db.
   */
  private async seedLanguages() {
    try {
      const languages: Language[] = Object.values(LanguageEnum).map((language) => ({
        key: language,
      }));
      const result = await this.languageRepository.upsert(languages);
      this.logger.log(`Seeded languages: ${result.length}`, SeedingService.name);
    } catch (err) {
      this.logger.error('Failed to seed languages', err.stack, SeedingService.name);
      throw new SeedingException(`Failed to seed languages: ${err}`);
    }
  }

  /**
   * Seed categories to db.
   */
  private async seedCategories() {
    try {
      const categories: ArticleCategoryEnum[] = Object.values(ArticleCategoryEnum);
      const result = await this.categoryRepository.upsert(categories);
      this.logger.log(`Seeded categories: ${result.length}`, SeedingService.name);
    } catch (err) {
      this.logger.error('Failed to seed categories', err.stack, SeedingService.name);
      throw new SeedingException(`Failed to seed categories: ${err}`);
    }
  }
}
