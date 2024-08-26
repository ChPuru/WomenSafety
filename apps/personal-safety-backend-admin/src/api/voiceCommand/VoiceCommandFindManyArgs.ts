import { VoiceCommandWhereInput } from "./VoiceCommandWhereInput";
import { VoiceCommandOrderByInput } from "./VoiceCommandOrderByInput";

export type VoiceCommandFindManyArgs = {
  where?: VoiceCommandWhereInput;
  orderBy?: Array<VoiceCommandOrderByInput>;
  skip?: number;
  take?: number;
};
