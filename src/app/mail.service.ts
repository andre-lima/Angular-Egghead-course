import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `You've got mail!`,
    `No you didnt`,
    `Yes i did!!!`
  ]

  constructor() { }

}
