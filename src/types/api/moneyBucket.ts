import { ApiUser } from "./user";

export type ApiMoneyBucket = {
    id: number;
    userId: number;
    user: ApiUser;
    name: string;
    color: string;
    balance: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}
