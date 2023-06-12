'use client';
import { ArticleBody } from '@mediagene/draftjs-to-html/dist/ArticleBody';
import { RawDraftContentState } from 'draft-js';
import styles from './articleBody.module.scss'

interface ArticleBodyWrapperProps {
  data: RawDraftContentState;
  config: {
    siteName: string,
    usage: string,
    slug: string,
    origin: string,
  };
  screen?: 'sm' | 'lg';
}

export default function ArticleBodyWrapper({ data, config }: ArticleBodyWrapperProps) {
  return <ArticleBody data={data} config={config} styles={styles}/>;
}
