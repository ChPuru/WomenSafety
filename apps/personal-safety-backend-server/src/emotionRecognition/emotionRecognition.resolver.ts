import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmotionRecognitionResolverBase } from "./base/emotionRecognition.resolver.base";
import { EmotionRecognition } from "./base/EmotionRecognition";
import { EmotionRecognitionService } from "./emotionRecognition.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmotionRecognition)
export class EmotionRecognitionResolver extends EmotionRecognitionResolverBase {
  constructor(
    protected readonly service: EmotionRecognitionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
