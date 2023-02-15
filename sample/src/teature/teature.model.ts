import { TeatureStatus } from './teature-status.enum';

export interface Teature {
  id: string;
  name: string;
  email: string;
  status: TeatureStatus;
}
