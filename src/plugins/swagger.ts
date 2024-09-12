import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import apiReference from '@scalar/fastify-api-reference';
import fp from 'fastify-plugin';
import { apiTags } from './../configs/apiTags';
import { version } from '../../package.json';

export default fp(async fastify => {
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'KTrek API Gateway',
        version
      }
      // tags: apiTags
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

  // fastify.register(apiReference, {
  //   routePrefix: '/reference',
  //   configuration: {
  //     spec: {
  //       content: () => fastify.swagger()
  //     }
  //   },
  //   hooks: {
  //     onRequest: function (request, reply, done) {
  //       done();
  //     },
  //     preHandler: function (request, reply, done) {
  //       done();
  //     }
  //   }
  // });
});
