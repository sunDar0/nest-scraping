import { Controller, Get } from '@nestjs/common';
import { FileService } from '../file/file.service';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {

  constructor(
    private readonly searchService:SearchService, 
    private readonly fileService:FileService
  ){}
  
  @Get('inven/current-rank')
  async getInvenRank()
  {
    return await this.fileService.readFile('scraping/inven.rank');
  }
}
