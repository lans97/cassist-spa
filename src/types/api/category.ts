import { ApiUser } from "./user";

export interface ApiCategory {
    id: number;
    userId: number;
    user: ApiUser;
    name: string;
    color: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
