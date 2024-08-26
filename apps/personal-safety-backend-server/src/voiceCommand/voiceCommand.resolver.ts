import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoiceCommandResolverBase } from "./base/voiceCommand.resolver.base";
import { VoiceCommand } from "./base/VoiceCommand";
import { VoiceCommandService } from "./voiceCommand.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoiceCommand)
export class VoiceCommandResolver extends VoiceCommandResolverBase {
  constructor(
    protected readonly service: VoiceCommandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
