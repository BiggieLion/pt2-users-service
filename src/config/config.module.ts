import { Module } from '@nestjs/common';
import { ApiService } from './api/api.conf.service';
import { ApiModule } from './api/api.conf.module';

@Module({
  providers: [ApiService],
  imports: [ApiModule],
})
export class ConfigModule {}
