import type { User } from "./user";

export interface Profile {
  id: string;
  name: string;
  caption?: string;
  avatarUrl: string;
  user_id: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
}
