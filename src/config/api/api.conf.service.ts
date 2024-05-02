import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiService {
  constructor(private readonly configSvc: ConfigService) {}

  public get HOST(): string {
    return this.configSvc.get<string>('api.host');
  }

  public get PORT(): number {
    return this.configSvc.get<number>('api.port');
  }

  public get ENV(): string {
    return this.configSvc.get<string>('api.env');
  }

  public get NODE_ENV(): string {
    return this.configSvc.get<string>('api.node_env');
  }

  public get VERSION(): string {
    return this.configSvc.get<string>('api.version');
  }

  public get LEVEL(): string {
    return this.configSvc.get<string>('api.level');
  }

  public get CUSTOM_DOMAIN(): string {
    return this.configSvc.get<string>('api.custom_domain');
  }
}
