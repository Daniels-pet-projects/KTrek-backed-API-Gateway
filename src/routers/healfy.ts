import { FastifyInstance } from 'fastify';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/hello',
    {
      schema: {
        description: 'post some data',

        request: {},
        response: {
          200: {
            description: 'post some data',
            type: 'object',
            properties: {
              hello: {
                type: 'string'
              }
            }
          }
        }
      }
    },
    function (request, reply) {
      reply.send({ hello: 'world' });
    }
  );
};
