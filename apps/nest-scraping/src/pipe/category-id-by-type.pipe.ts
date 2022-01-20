import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { DOGDRIP_SERVICE, INVEN_SERVICE, NAVER_SERVICE, ScrapingType } from '@scraper/constants/service.contants';

@Injectable()
export class CategoryIdByTypePipe implements PipeTransform {
  
  transform(value: any, metadata: ArgumentMetadata):ScrapingType {
    switch(value){
      case '1': return INVEN_SERVICE; 
      case '2': return NAVER_SERVICE; 
      case '3': return DOGDRIP_SERVICE;
      default: throw new NotFoundException();
    }
  }
}
