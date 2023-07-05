import { registerAs } from '@nestjs/config';
import { z } from 'zod';

const schema = z.object({
  PORT: z.coerce.number().default(8082),
  CUSTOMER_SERVICE_HOST: z.string().default('0.0.0.0'),
  CUSTOMER_SERVICE_PORT: z.coerce.number().default(3001),
});

export default registerAs('app', () => schema.parse(process.env));
