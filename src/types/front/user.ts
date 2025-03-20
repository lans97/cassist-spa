export type FrontUser = {
    id: number;
    uuid: string;
    email: string;
    name: string;
    role: "admin" | "user";
    displayName: string;
}
