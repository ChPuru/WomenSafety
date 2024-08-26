import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmergencyContactResolverBase } from "./base/emergencyContact.resolver.base";
import { EmergencyContact } from "./base/EmergencyContact";
import { EmergencyContactService } from "./emergencyContact.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmergencyContact)
export class EmergencyContactResolver extends EmergencyContactResolverBase {
  constructor(
    protected readonly service: EmergencyContactService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
