import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlertUpdateInput = {
  description?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
