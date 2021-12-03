import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
  modelName: 'user',
  tableName: 'users',
  underscored: true,
  timestamps: true,
  version: true
})
export class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    comment: 'The identifier for the user record'
  })
  id: string

  @Column({
    type: DataType.UUID,
    comment: 'Ref: Organization. The organization the user is associated with'
  })
  organization: string

  @Column({
    type: DataType.STRING,
    comment: 'The login id of the User'
  })
  loginId: string

  @Column({
    type: DataType.STRING,
    comment: 'The avatar url of the USER'
  })
  avatar: string

  @Column({
    type: DataType.INTEGER,
    comment: 'The number of followers of the User'
  })
  followers: number

  @Column({
    type: DataType.INTEGER,
    comment: 'The number of people being followed by the User'
  })
  following: number
}
