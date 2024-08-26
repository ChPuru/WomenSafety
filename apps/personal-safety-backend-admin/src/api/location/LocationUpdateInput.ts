import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LocationUpdateInput = {
  latitude?: number | null;
  longitude?: number | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
