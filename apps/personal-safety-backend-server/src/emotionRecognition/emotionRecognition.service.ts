import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmotionRecognitionServiceBase } from "./base/emotionRecognition.service.base";

@Injectable()
export class EmotionRecognitionService extends EmotionRecognitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
