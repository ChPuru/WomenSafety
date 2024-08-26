import { AlertUpdateManyWithoutUsersInput } from "./AlertUpdateManyWithoutUsersInput";
import { EmergencyContactUpdateManyWithoutUsersInput } from "./EmergencyContactUpdateManyWithoutUsersInput";
import { EmotionRecognitionUpdateManyWithoutUsersInput } from "./EmotionRecognitionUpdateManyWithoutUsersInput";
import { LocationUpdateManyWithoutUsersInput } from "./LocationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VoiceCommandUpdateManyWithoutUsersInput } from "./VoiceCommandUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  alerts?: AlertUpdateManyWithoutUsersInput;
  email?: string | null;
  emergencyContacts?: EmergencyContactUpdateManyWithoutUsersInput;
  emotionRecognitions?: EmotionRecognitionUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  locations?: LocationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  voiceCommands?: VoiceCommandUpdateManyWithoutUsersInput;
};
