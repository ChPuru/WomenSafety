import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmotionRecognitionCreateInput = {
  emotion?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
