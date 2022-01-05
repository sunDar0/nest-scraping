import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ranks, RanksSchema } from './entity/inven.rank.entity';
import { InvenService } from './inven.service';
import { InvenController } from './inven.controller';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Ranks.name, schema: RanksSchema}])
  ],
  providers: [InvenService],
  controllers: [InvenController]
})
export class InvenModule {}
