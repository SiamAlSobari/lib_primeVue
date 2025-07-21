import type { Profile } from "./profile";

export interface User {
  id: string;
  email: string;
  password: string;
  role: "user" | "admin";
  created_at: Date;
  updated_at: Date;
  profile?: Profile;
}
