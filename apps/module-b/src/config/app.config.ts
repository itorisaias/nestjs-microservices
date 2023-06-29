import { registerAs } from '@nestjs/config';
import { z } from 'zod';

const schema = z.object({
  PORT: z.coerce.number().default(8082),
});

export default registerAs('app', () => schema.parse(process.env));
