import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmotionRecognitionService } from "./emotionRecognition.service";
import { EmotionRecognitionControllerBase } from "./base/emotionRecognition.controller.base";

@swagger.ApiTags("emotionRecognitions")
@common.Controller("emotionRecognitions")
export class EmotionRecognitionController extends EmotionRecognitionControllerBase {
  constructor(
    protected readonly service: EmotionRecognitionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
