import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [process.env.SCHEMA_PATH ||
      'http://dev-minimum-1388355598.ap-northeast-1.elb.amazonaws.com:80/graph/query']: {
        headers: {
          'mini-api-key': process.env.MINI_API_KEY || 'YOUR-TOKEN-HERE'
        }
      }
    }
  ],
  documents: ['./**/*.tsx'],
  generates: {
    'generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  }
};
export default config;
