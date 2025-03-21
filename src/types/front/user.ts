export interface FrontUser {
    id: number;
    uuid: string;
    email: string;
    role: "admin" | "user";
    displayName: string;
}
