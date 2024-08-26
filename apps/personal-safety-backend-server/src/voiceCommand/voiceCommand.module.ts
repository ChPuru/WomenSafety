import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoiceCommandModuleBase } from "./base/voiceCommand.module.base";
import { VoiceCommandService } from "./voiceCommand.service";
import { VoiceCommandController } from "./voiceCommand.controller";
import { VoiceCommandResolver } from "./voiceCommand.resolver";

@Module({
  imports: [VoiceCommandModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoiceCommandController],
  providers: [VoiceCommandService, VoiceCommandResolver],
  exports: [VoiceCommandService],
})
export class VoiceCommandModule {}
