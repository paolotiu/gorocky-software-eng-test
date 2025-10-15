import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const serverEnv = createEnv({
  server: {
    DATABASE_URL: z.url().optional(),
    DIRECT_URL: z.url().optional(),
  },
  runtimeEnv: process.env,
});
