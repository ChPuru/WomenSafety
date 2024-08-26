import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoiceCommandCreateInput = {
  command?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
