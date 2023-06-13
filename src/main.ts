import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);


  app.useStaticAssets(join(__dirname, '..', 'src/public'), {
    maxAge: process.env.NODE_ENV == 'production' ? '7d' : '1m',
  });
  app.setBaseViewsDir(join(__dirname, '..', 'src/public'));
  app.setViewEngine('ejs');

  const port = process.env.PORT || 8080;
  await app.listen(port);
}
bootstrap();
