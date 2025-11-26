import { Roles } from '@prisma/client';

export interface JwtPayload {
  sub: string; // ID do usuário
  email: string;
  role: Roles;
  iat?: number; // issued at (opcional, vem no token)
  exp?: number; // expiration (opcional)
  iss?: string; // issuer
  aud?: string; // audience
}
