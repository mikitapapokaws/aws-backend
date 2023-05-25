import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('nestusers')
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  @Column({
    default: '',
    nullable: false,
  })
  name: string;
  @Column({
    default: '',
    nullable: false,
  })
  email: string;
}
