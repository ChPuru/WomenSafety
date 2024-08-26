import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmergencyContactUpdateInput = {
  name?: string | null;
  phoneNumber?: string | null;
  relation?: string | null;
  user?: UserWhereUniqueInput | null;
};
