import { EmotionRecognition as TEmotionRecognition } from "../api/emotionRecognition/EmotionRecognition";

export const EMOTIONRECOGNITION_TITLE_FIELD = "emotion";

export const EmotionRecognitionTitle = (
  record: TEmotionRecognition
): string => {
  return record.emotion?.toString() || String(record.id);
};
