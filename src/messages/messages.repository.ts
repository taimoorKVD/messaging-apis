import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageRepository {
    async findAll() {
        const contents = await readFile('messages.json', 'utf8'),
            messages = JSON.parse(contents);

        return messages;
    }

    async findOne(id: string) {
        const messages = await this.findAll();
        return messages[id];
    }

    async create(content: string) {
        const messages = await this.findAll(),
            id = Math.floor(Math.random() * 999);

        messages[id] = { id, content };

        await writeFile('messages.json', JSON.stringify(messages));

        return await this.findAll();
    }
}