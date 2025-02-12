import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOption = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  app.enableCors(corsOption);
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.setGlobalPrefix('api', {
    exclude: [{ method: RequestMethod.GET, path: '/' }],
  });

  app.enableVersioning({
    type: 0,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
