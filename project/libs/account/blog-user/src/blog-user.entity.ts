import { StorableEntity, AuthUser, UserRole} from '@project/core';
import {Entity} from "@project/core";
import {Injectable} from "@nestjs/common";
import { compare, genSalt, hash  } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';
@Injectable()
export class BlogUserEntity extends Entity implements StorableEntity<AuthUser> {
  public email: string;
  public firstName: string;
  public lastName: string;
  public birthDate: Date;
  public role: UserRole;
  public passwordHash: string;

  constructor(user?: AuthUser) {
    super();
    this.populate(user);
  }

  public populate(user?: AuthUser): void {
    if (! user) {
      return;
    }

    this.id = user.id ?? '';
    this.email = user.email;
    this.birthDate = user.birthDate;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.passwordHash = user.passwordHash;
    this.role = user.role;
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      role: this.role,
      passwordHash: this.passwordHash,
    }
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
