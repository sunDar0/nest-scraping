import { Injectable } from '@nestjs/common';

@Injectable()
export class ScrapingSubsService {
  
  getHello(): string {
    return 'health check';
  }
}
