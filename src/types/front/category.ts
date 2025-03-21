import { FrontUser } from "./user";

export interface FrontCategory {
    id: number;
    user: FrontUser;
    name: string;
    color: string;
}
