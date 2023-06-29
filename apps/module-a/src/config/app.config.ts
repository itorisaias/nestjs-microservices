import { registerAs } from '@nestjs/config';
import { z } from 'zod';

import { version } from '../../../../package.json';

const schema = z.object({
  PORT: z.coerce.number().default(8080),
  PORT_MICROSERVICE: z.coerce.number().default(8081),
  APP_VERSION: z.string().default(version),
});

export type AppConfig = z.infer<typeof schema>;

export default registerAs('app', () => schema.parse(process.env));
