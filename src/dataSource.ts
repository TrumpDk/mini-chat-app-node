import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "asd1010486983A/",
    database: "chatroom",
    logging: true,
    entities: [__dirname + "**/entity/**/*.ts"],
    migrations: ["/migration/**/*.ts"],
    subscribers: ["/subscriber/**/*.ts"],
})