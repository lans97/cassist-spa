import { FrontCategory } from "./category";
import { FrontMoneyBucket } from "./moneyBucket";

export type FrontTransaction = {
    id: number;
    moneyBucket: FrontMoneyBucket;
    ammount: string;
    category: FrontCategory;
    description: string;
}
