import { SetMetadata } from '@nestjs/common';
import { Roles } from '../constants/Roles';

export const ROLES_KEY = 'roles';
export const SetRoles = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);
