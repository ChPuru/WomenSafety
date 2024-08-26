import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmotionRecognitionUpdateInput = {
  emotion?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
