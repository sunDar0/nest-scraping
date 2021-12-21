import { Test, TestingModule } from '@nestjs/testing';
import { ScrapingSubsController } from './scraping-subs.controller';
import { ScrapingSubsService } from './scraping-subs.service';

describe('ScrapingSubsController', () => {
  let scrapingSubsController: ScrapingSubsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ScrapingSubsController],
      providers: [ScrapingSubsService],
    }).compile();

    scrapingSubsController = app.get<ScrapingSubsController>(ScrapingSubsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(scrapingSubsController.getHello()).toBe('Hello World!');
    });
  });
});
