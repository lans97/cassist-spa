import { ApiUser } from "./user";

export interface ApiMoneyBucket {
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
