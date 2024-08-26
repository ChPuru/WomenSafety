import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoiceCommandUpdateInput = {
  command?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
