import { MessageRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageService {
    constructor(public messageRepository: MessageRepository) {}

    findAll() {
        return this.messageRepository.findAll();
    }

    findOne(id: string) {
        return this.messageRepository.findOne(id);
    }

    create(content: string) {
        return this.messageRepository.create(content);
    }
}