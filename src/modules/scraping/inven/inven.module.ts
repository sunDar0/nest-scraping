import { Module } from '@nestjs/common';
import { InvenService } from './inven.service';

@Module({
  providers: [InvenService]
})
export class InvenModule {}
