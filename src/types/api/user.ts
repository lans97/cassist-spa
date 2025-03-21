import { ApiRole } from "./role";

export interface ApiUser {
    id: number;
    uuid: string;
    email: string;
    displayName: string;
    role: ApiRole;
    emailVerified: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}
