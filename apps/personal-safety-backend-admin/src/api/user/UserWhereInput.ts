import { AlertListRelationFilter } from "../alert/AlertListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmergencyContactListRelationFilter } from "../emergencyContact/EmergencyContactListRelationFilter";
import { EmotionRecognitionListRelationFilter } from "../emotionRecognition/EmotionRecognitionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { VoiceCommandListRelationFilter } from "../voiceCommand/VoiceCommandListRelationFilter";

export type UserWhereInput = {
  alerts?: AlertListRelationFilter;
  email?: StringNullableFilter;
  emergencyContacts?: EmergencyContactListRelationFilter;
  emotionRecognitions?: EmotionRecognitionListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  locations?: LocationListRelationFilter;
  username?: StringFilter;
  voiceCommands?: VoiceCommandListRelationFilter;
};
