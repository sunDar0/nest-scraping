import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CategoryIdByTypePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    switch(value){
      case 1:
        return 
        break;
      case 2:
        break;
      case 3:
        break;
    }
    console.log(value);
    console.log(metadata);
    return value;
  }
}
