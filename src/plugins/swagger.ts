import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fp from 'fastify-plugin';
import { version } from '../../package.json';
import { apiTags } from './../configs/apiTags';

export default fp(async fastify => {
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'KTrek API Gateway',
        version
      },
      tags: apiTags
    }
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      deepLinking: true
    },
    staticCSP: true,
    transformStaticCSP: header => header
  });
});
