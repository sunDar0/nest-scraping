import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { InvenService } from './inven.service';


@Controller('inven')
export class InvenController {
  constructor(private readonly invenService: InvenService) {}
  
  
  @EventPattern('rank_created')
  async rankCreated(rank : any)
  {
    this.invenService.addInvenRank(rank);
  }
}
