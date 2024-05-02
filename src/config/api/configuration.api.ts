import { registerAs } from '@nestjs/config';

export default registerAs('api', () => ({
  host: process.env.SWAGGER_HOST,
  port: parseInt(process.env.API_PORT, 10) || 3000,
  env: process.env.ENV || 'dev',
  node_env: process.env.NODE_ENV || 'development',
  version: process.env.VERSION || 'v1',
  level: process.env.LOG_LEVEL || 'debug',
  custom_domain: process.env.CUSTOM_DOMAIN,
}));
