import { SortOrder } from "../../util/SortOrder";

export type EmergencyContactOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  relation?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
