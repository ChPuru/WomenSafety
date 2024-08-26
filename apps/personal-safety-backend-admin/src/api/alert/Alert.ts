import { User } from "../user/User";

export type Alert = {
  createdAt: Date;
  description: string | null;
  id: string;
  status: string | null;
  timestamp: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
