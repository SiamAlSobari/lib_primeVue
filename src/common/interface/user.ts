import type { Profile } from "./profile";

export interface User {
  id: string;
  email: string;
  password: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
  profile?: Profile;
}
