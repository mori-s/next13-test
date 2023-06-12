import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [process.env.SCHEMA_PATH || 'http://localhost:3000/api/graphql']: {
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
