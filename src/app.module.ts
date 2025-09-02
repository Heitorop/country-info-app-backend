import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesModule } from './countries/countries.module';
import { HolidaysModule } from './holidays/holidays.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get<string>('DB_HOST'),
    //     port: parseInt(configService.get<string>('DB_PORT', '5432')),
    //     username: configService.get<string>('DB_USER'),
    //     password: configService.get<string>('DB_PASSWORD'),
    //     database: configService.get<string>('DB_NAME'),
    //     // entities: [User, Holiday],
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    CountriesModule,
    HolidaysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
