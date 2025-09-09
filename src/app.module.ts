import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { BpartnersModule } from './bpartners/bpartners.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cfgService: ConfigService) => ({
        type: 'postgres',
        host: cfgService.get('DB_HOST'),
        port: cfgService.get('DB_PORT'),
        username: cfgService.get('DB_USER'),
        password: cfgService.get('DB_PASS'),
        database: cfgService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false,
        migrationsRun: false,
        logging: cfgService.get('NODE_ENV') !== 'production',
        ssl: cfgService.get('NODE_ENV') === 'production',
      }),
    }),
    ProductsModule,
    BpartnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
