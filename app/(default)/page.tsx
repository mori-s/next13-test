import PostList from '@/components/Article/list';
import style from './page.module.scss';

export default function Home() {
  return (
    <div className={style.content}>
      {/* @ts-expect-error Server Component */}
      <PostList limit={20} offset={0} />
    </div>
  );
}
