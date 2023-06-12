import { ArticlesQuery } from '@/generated/graphql';
import { getClient } from '../../libs/client';
import { gql } from '@apollo/client';
import ArticleItem from './item';
import styles from './list.module.scss';

async function getArticles(limit: number = 10, offset: number = 0) {
  const query = gql`
    query articles($page: Int! = 0, $limit: Int! = 20, $order: String! = "released_at DESC") {
      articles(limit: $limit, page_index: $page, order: $order, filter: {}) {
        id
        title
        slug
        thumbnail {
          caption
          image {
            url
          }
        }
      }
    }
  `;

  const { data, error, errors, loading } = await getClient().query<ArticlesQuery>({
    query,
    variables: {
      limit: limit,
      offset: offset
    }
  });
  return data;
}

interface ArticleListProps {
  limit?: number;
  offset?: number;
}

export default async function ArticleList({ limit = 10, offset = 0 }: ArticleListProps) {
  const { articles } = await getArticles(limit, offset);

  return (
    <div className={styles.articleList}>
      {articles?.map((article) => {
        return article && <ArticleItem key={article?.slug} article={article} />;
      })}
    </div>
  );
}
