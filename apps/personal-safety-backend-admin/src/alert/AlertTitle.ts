import { Alert as TAlert } from "../api/alert/Alert";

export const ALERT_TITLE_FIELD = "title";

export const AlertTitle = (record: TAlert): string => {
  return record.title?.toString() || String(record.id);
};
