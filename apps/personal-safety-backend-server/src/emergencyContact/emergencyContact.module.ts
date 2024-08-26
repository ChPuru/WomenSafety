import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmergencyContactModuleBase } from "./base/emergencyContact.module.base";
import { EmergencyContactService } from "./emergencyContact.service";
import { EmergencyContactController } from "./emergencyContact.controller";
import { EmergencyContactResolver } from "./emergencyContact.resolver";

@Module({
  imports: [EmergencyContactModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmergencyContactController],
  providers: [EmergencyContactService, EmergencyContactResolver],
  exports: [EmergencyContactService],
})
export class EmergencyContactModule {}
