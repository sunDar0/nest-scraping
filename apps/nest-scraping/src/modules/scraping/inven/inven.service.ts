import { HttpService, Injectable } from '@nestjs/common';
import { InvenScraping } from '@parser/inven.scraping';
import { BaseScrapingService } from '@scraper/modules/scraping/base.scraping.service';
import { ScrapingFailException } from '@scraper/exception/scraping.fail.exception';



@Injectable()
export class InvenService implements BaseScrapingService
{
  constructor(
    private readonly httpService: HttpService,
    private readonly invenScraping: InvenScraping,
    )
  { }
  

  async scraping()
  {
    if(this.invenScraping.checkLastUpdate()) throw new ScrapingFailException('already update data')
    const response = await this.httpService.get('https://inven.co.kr').toPromise()
    
    
    await this.invenScraping.parsedData(response.data);
  }

  
}
