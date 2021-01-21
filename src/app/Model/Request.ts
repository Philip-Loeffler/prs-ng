import { User } from 'src/app/Model/User';

export class Request {
  user: User;
  description: string;
  justification: string;
  dateNeeded: string;
  deliveryMode: string;
  status: string;
  total: number;
  submittedDate: string;
  reasonForRejection: string;

  constructor(
    user: User,
    description: '',
    justification: '',
    dateNeeded: '',
    deliveryMode: '',
    status: '',
    total = 0,
    submittedDate: '',
    reasonForRejection: ''
  ) {
    this.user = user;
    this.description = description;
    this.justification = justification;
    this.dateNeeded = dateNeeded;
    this.deliveryMode = deliveryMode;
    this.status = status;
    this.total = total;
    this.submittedDate = submittedDate;
    this.reasonForRejection = reasonForRejection;
  }
}
