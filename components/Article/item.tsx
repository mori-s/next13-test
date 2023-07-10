import Link from 'next/link';
import styles from './item.module.scss';

interface ArticleItemProps {
  article: {
    title: string;
    slug: string;
    thumbnail?: {
      caption?: string | null;
      image?: {
        url: string;
      } | null;
    } | null;
  };
}

export default function ArticleItem({ article }: ArticleItemProps) {
  return (
    <Link href={`/post/${article.slug}`}>
      <article className={styles.articleItem}>
        {/* <Thumbnail thumbnail={article.thumbnail} /> */}
        <div className={styles.articleItem_info}>
          <div className={styles.articleItem_title}>{article.title}</div>
        </div>
      </article>
    </Link>
  );
}
