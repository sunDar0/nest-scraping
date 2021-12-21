import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ScrapingSubsModule } from './scraping-subs.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    ScrapingSubsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://tyndbbuq:MSlS3dvWzV2XOoDQYp9UkJbnWxYOw8IV@dingo.rmq.cloudamqp.com/tyndbbuq'],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      },
    }
  );
  app.listen();
}
bootstrap();
