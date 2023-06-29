import { registerAs } from '@nestjs/config';
import { z } from 'zod';

const schema = z.object({
  REDIS_HOST: z.string().default('redis'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_PASSWORD: z.string().nullish(),
  REDIS_ENABLE_TLS: z.coerce.boolean().default(false),
});

export type RedisConfig = z.infer<typeof schema>;

export default registerAs('redis', () => schema.parse(process.env));
