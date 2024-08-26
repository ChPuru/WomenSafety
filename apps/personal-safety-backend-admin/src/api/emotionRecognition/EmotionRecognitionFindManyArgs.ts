import { EmotionRecognitionWhereInput } from "./EmotionRecognitionWhereInput";
import { EmotionRecognitionOrderByInput } from "./EmotionRecognitionOrderByInput";

export type EmotionRecognitionFindManyArgs = {
  where?: EmotionRecognitionWhereInput;
  orderBy?: Array<EmotionRecognitionOrderByInput>;
  skip?: number;
  take?: number;
};
