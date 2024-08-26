import { User } from "../user/User";

export type Location = {
  createdAt: Date;
  id: string;
  latitude: number | null;
  longitude: number | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
