import { VoiceCommand as TVoiceCommand } from "../api/voiceCommand/VoiceCommand";

export const VOICECOMMAND_TITLE_FIELD = "command";

export const VoiceCommandTitle = (record: TVoiceCommand): string => {
  return record.command?.toString() || String(record.id);
};
