import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ScrapingSubsService } from './scraping-subs.service';

@Controller()
export class ScrapingSubsController {
  constructor(private readonly scrapingSubsService: ScrapingSubsService) {}

  @Get()
  getHello(): string {
    return this.scrapingSubsService.getHello();
  }

  @EventPattern('rank_created')
  async rankCreated(rank : any)
  {
    console.log(rank);
  }
}
