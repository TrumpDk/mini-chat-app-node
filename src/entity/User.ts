import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn({name: 'U_Id'})
    uId: number;

    @Column('int', {name: 'U_Login_Id'})
    uLoginId: number;

    @Column('varchar', {name: 'U_Nick_Name'})
    uNikename: string;

    @Column('varchar', {name: 'U_Password'})
    uPassword: string;
}