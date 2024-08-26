import { User } from "../user/User";

export type EmergencyContact = {
  createdAt: Date;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  relation: string | null;
  updatedAt: Date;
  user?: User | null;
};
