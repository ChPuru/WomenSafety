import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmergencyContactServiceBase } from "./base/emergencyContact.service.base";

@Injectable()
export class EmergencyContactService extends EmergencyContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
