import { FrontUser } from "./user";

export type FrontMoneyBucket = {
    id: number;
    user: FrontUser;
    name: string;
    color: string;
    balance: string;
}
