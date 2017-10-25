import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text:`You've got mail!`},
    {id: 1, text:`No you didnt`},
    {id: 2, text:`Yes i did!!!`}
  ]

  update(id, text){
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    )
  }

  constructor() { }

}
