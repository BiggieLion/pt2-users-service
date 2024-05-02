import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configurationApi from './configuration.api';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurationApi],
    }),
  ],
})
export class ApiModule {}
