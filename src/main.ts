import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as hbs from 'hbs';
import {} from '@nestjs/passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useStaticAssets(path.join(__dirname, 'public'));
  app.useStaticAssets(path.join(__dirname, 'public/css'));
  app.useStaticAssets(path.join(__dirname, 'public/images'));
  app.useStaticAssets(path.join(__dirname, 'public/js'));
  app.setBaseViewsDir(path.join(__dirname, 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(path.join(__dirname, 'views/partials'));
  app.enableCors();
  hbs.registerPartial('head', 'head');

  app.use(
    require('node-sass-middleware')({
      src: path.join(__dirname, '/public/css'),
      dest: path.join(__dirname, '/public/css'),
      debug: true,
      outputStyle: 'compressed',
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
