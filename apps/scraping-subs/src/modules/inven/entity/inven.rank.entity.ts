import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, Document } from "mongoose";

export type RanksDocument = Ranks & Document;


class Rank {
    
    rank: number;
    
    gameName: string;
    
    score: string;

    createdAt: string;
}

@Schema({
    collection: 'ranks',
    timestamps:true
})
export class Ranks {
    @Prop()
    ranks: Rank[]
}

export const RanksSchema = SchemaFactory.createForClass(Ranks);