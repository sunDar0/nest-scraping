import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ScrapingSubsModule } from './scraping-subs.module';

async function bootstrap() {
  const app = await NestFactory.create(ScrapingSubsModule);
  const configService = app.get(ConfigService);
  const RMQ_URL = configService.get<string>('RMQ_URL');

  const microServiceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: [RMQ_URL],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  }

  app.connectMicroservice(microServiceOptions);
  
  await app.startAllMicroservices();
    
  
  await app.listen(3001);
  console.log('scraping subscriber on!!');

}
bootstrap();
