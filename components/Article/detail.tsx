import { ArticleQuery } from '@/generated/graphql';
import { getClient } from '../../libs/client';
import { gql } from '@apollo/client';
import styles from './detail.module.scss';
import AeticleBodyWrapper from './bodyWrapper';

async function getArticle(slug: string) {
  const query = gql`
    query article($slug: String!) {
      article(articleCondition: { slug: $slug }) {
        id
        title
        slug
        body
        thumbnail {
          caption
          image {
            url
          }
        }
        tags {
          slug
          name
        }
        collaborators {
          name
          slug
        }
      }
    }
  `;

  const { data, error, errors, loading } = await getClient().query<ArticleQuery>({
    query,
    variables: {
      slug: slug
    }
  });
  return data;
}

interface ArticleProps {
  id: string;
}

export default async function ArticleDetail({ id }: ArticleProps) {
  const { article } = await getArticle(id);
  console.log(article);

  return (
    <article className={styles.articleDetail}>
      <h1 className={styles.articleDetail_title}>{article?.title}</h1>
      <AeticleBodyWrapper
        data={article?.body && JSON.parse(article?.body)}
        config={{
          siteName: 'MediaGene',
          usage: 'article',
          slug: article?.slug || '',
          origin: 'https://mediagene.jp'
        }}
      />
    </article>
  );
}
