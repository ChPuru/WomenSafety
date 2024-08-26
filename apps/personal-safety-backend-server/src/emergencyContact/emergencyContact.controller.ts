import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmergencyContactService } from "./emergencyContact.service";
import { EmergencyContactControllerBase } from "./base/emergencyContact.controller.base";

@swagger.ApiTags("emergencyContacts")
@common.Controller("emergencyContacts")
export class EmergencyContactController extends EmergencyContactControllerBase {
  constructor(
    protected readonly service: EmergencyContactService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
