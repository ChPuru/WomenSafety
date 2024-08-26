import { EmergencyContact as TEmergencyContact } from "../api/emergencyContact/EmergencyContact";

export const EMERGENCYCONTACT_TITLE_FIELD = "name";

export const EmergencyContactTitle = (record: TEmergencyContact): string => {
  return record.name?.toString() || String(record.id);
};
