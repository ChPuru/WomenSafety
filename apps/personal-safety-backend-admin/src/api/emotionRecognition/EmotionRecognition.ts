import { User } from "../user/User";

export type EmotionRecognition = {
  createdAt: Date;
  emotion: string | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
