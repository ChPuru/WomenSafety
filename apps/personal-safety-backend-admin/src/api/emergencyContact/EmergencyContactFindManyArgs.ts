import { EmergencyContactWhereInput } from "./EmergencyContactWhereInput";
import { EmergencyContactOrderByInput } from "./EmergencyContactOrderByInput";

export type EmergencyContactFindManyArgs = {
  where?: EmergencyContactWhereInput;
  orderBy?: Array<EmergencyContactOrderByInput>;
  skip?: number;
  take?: number;
};
