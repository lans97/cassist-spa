import { FrontUser } from "./user";

export interface FrontMoneyBucket {
    id: number;
    user: FrontUser;
    name: string;
    color: string;
    balance: string;
}
