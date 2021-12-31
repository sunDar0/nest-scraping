import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ranks, RankDocument } from './entity/inven.rank.entity';

@Injectable()
export class InvenService {
  constructor(@InjectModel(Ranks.name) private readonly rankModel: Model<RankDocument>)
  {}

  async addInvenRank(data:any)
  {
    console.log(data);
    return await new this.rankModel(data).save();
  }
  
}
