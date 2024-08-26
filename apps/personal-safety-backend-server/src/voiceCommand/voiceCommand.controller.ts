import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoiceCommandService } from "./voiceCommand.service";
import { VoiceCommandControllerBase } from "./base/voiceCommand.controller.base";

@swagger.ApiTags("voiceCommands")
@common.Controller("voiceCommands")
export class VoiceCommandController extends VoiceCommandControllerBase {
  constructor(
    protected readonly service: VoiceCommandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
