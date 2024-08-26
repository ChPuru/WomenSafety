import { SortOrder } from "../../util/SortOrder";

export type VoiceCommandOrderByInput = {
  command?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
