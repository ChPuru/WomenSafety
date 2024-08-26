import { AlertCreateNestedManyWithoutUsersInput } from "./AlertCreateNestedManyWithoutUsersInput";
import { EmergencyContactCreateNestedManyWithoutUsersInput } from "./EmergencyContactCreateNestedManyWithoutUsersInput";
import { EmotionRecognitionCreateNestedManyWithoutUsersInput } from "./EmotionRecognitionCreateNestedManyWithoutUsersInput";
import { LocationCreateNestedManyWithoutUsersInput } from "./LocationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VoiceCommandCreateNestedManyWithoutUsersInput } from "./VoiceCommandCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  alerts?: AlertCreateNestedManyWithoutUsersInput;
  email?: string | null;
  emergencyContacts?: EmergencyContactCreateNestedManyWithoutUsersInput;
  emotionRecognitions?: EmotionRecognitionCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  locations?: LocationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
  voiceCommands?: VoiceCommandCreateNestedManyWithoutUsersInput;
};
