import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET
  };
});
