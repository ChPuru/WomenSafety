import { Alert } from "../alert/Alert";
import { EmergencyContact } from "../emergencyContact/EmergencyContact";
import { EmotionRecognition } from "../emotionRecognition/EmotionRecognition";
import { Location } from "../location/Location";
import { JsonValue } from "type-fest";
import { VoiceCommand } from "../voiceCommand/VoiceCommand";

export type User = {
  alerts?: Array<Alert>;
  createdAt: Date;
  email: string | null;
  emergencyContacts?: Array<EmergencyContact>;
  emotionRecognitions?: Array<EmotionRecognition>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  locations?: Array<Location>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  voiceCommands?: Array<VoiceCommand>;
};
