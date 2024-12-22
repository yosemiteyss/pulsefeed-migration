import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { MigrationModule, MigrationService } from './migration';
import { ConfigModule, LoggerModule } from '@pulsefeed/common';
import { SeedingModule, SeedingService } from './seeding';

@Module({
  imports: [
    ConfigModule,
    // Disable batch loop to allow graceful shutdown.
    LoggerModule.forRootAsync({ batching: false }),
    MigrationModule,
    SeedingModule,
  ],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(
    private readonly migrationService: MigrationService,
    private readonly seedingService: SeedingService,
  ) {}

  /**
   * Run migrations and seeding on application startup.
   */
  async onApplicationBootstrap() {
    await this.migrationService.runMigration();
    await this.seedingService.runSeeding();
  }
}
