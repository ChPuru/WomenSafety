import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlertCreateInput = {
  description?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
