import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoiceCommandServiceBase } from "./base/voiceCommand.service.base";

@Injectable()
export class VoiceCommandService extends VoiceCommandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
