import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmotionRecognitionModuleBase } from "./base/emotionRecognition.module.base";
import { EmotionRecognitionService } from "./emotionRecognition.service";
import { EmotionRecognitionController } from "./emotionRecognition.controller";
import { EmotionRecognitionResolver } from "./emotionRecognition.resolver";

@Module({
  imports: [EmotionRecognitionModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmotionRecognitionController],
  providers: [EmotionRecognitionService, EmotionRecognitionResolver],
  exports: [EmotionRecognitionService],
})
export class EmotionRecognitionModule {}
