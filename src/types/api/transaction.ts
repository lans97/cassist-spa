import { ApiCategory } from "./category";
import { ApiMoneyBucket } from "./moneyBucket";

export type ApiTransaction = {
    id: number;
    moneyBucketId: number;
    bucket: ApiMoneyBucket;
    ammount: string
    categoryId: number;
    category: ApiCategory;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}
