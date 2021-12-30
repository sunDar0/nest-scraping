import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ScrapingSubsModule } from './scraping-subs.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    ScrapingSubsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`${process.env.RMQ_URL}`],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      },
    }
  );
  await app.listen();
  console.log('scraping subscriber on!!');

}
bootstrap();
