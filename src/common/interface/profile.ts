import type { User } from "./user";

export interface Profile {
  id: string;
  name: string;
  caption?: string;
  avatar_url: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  user?: User;
}
