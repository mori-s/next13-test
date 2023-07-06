import PostDetail from '@/components/Article/detail';
import style from './page.module.scss';

export default function Post({ params }: { params: { slug: string } }) {
  return (
    <div className={style.content}>
      {/* @ts-expect-error Server Component */}
      <PostDetail slug={params.slug} />
    </div>
  );
}
