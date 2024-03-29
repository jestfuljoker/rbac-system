import { z } from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

import { ALL_PERMISSIONS } from '~/config/permissions';

export const createRoleBodySchema = z.object({
	name: z.string(),
	permissions: z.array(z.enum(ALL_PERMISSIONS)),
});

export type CreateRoleBody = z.infer<typeof createRoleBodySchema>;

export const createRoleJsonSchema = {
	body: zodToJsonSchema(createRoleBodySchema, 'createRoleBodySchema'),
};
