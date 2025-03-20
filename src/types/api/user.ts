import { ApiRole } from "./role";

export type ApiUser = {
    id: number;
    uuid: string;
    email: string;
    display_name: string;
    role: ApiRole;
    email_verified: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
