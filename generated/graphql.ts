import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Map: { input: any; output: any; }
  Time: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type AdSetting = {
  __typename?: 'AdSetting';
  name: Scalars['String']['output'];
  predid_timeout: Scalars['Int']['output'];
  slots?: Maybe<Array<AdSlot>>;
  tam_timeout: Scalars['Int']['output'];
};

export type AdSlot = {
  __typename?: 'AdSlot';
  css: Scalars['String']['output'];
  div_id: Scalars['String']['output'];
  is_active: Scalars['Boolean']['output'];
  is_predid: Scalars['Boolean']['output'];
  lazyload_tam_size?: Maybe<Array<Scalars['String']['output']>>;
  size?: Maybe<Array<Scalars['String']['output']>>;
  tam_size?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
};

export type AdSpace = {
  __typename?: 'AdSpace';
  articles?: Maybe<Array<Article>>;
  collections?: Maybe<Array<Collection>>;
  created_at: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  priority: Scalars['Int']['output'];
  settings?: Maybe<Array<AdSetting>>;
  title: Scalars['String']['output'];
  updated_at: Scalars['Time']['output'];
};

export type AdSpaceCondition = {
  article_slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  page_type: Scalars['Int']['input'];
};

export type AdText = {
  __typename?: 'AdText';
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type Article = {
  __typename?: 'Article';
  associated_collections?: Maybe<Array<Collection>>;
  body: Scalars['String']['output'];
  collaborators?: Maybe<Array<Collaborator>>;
  collections?: Maybe<Array<Collection>>;
  created_at: Scalars['Time']['output'];
  end_at: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  last_modified_by?: Maybe<ArticleLastModifiedUser>;
  metadata?: Maybe<ArticleMetaData>;
  ogp_image?: Maybe<Medium>;
  ogp_image_id?: Maybe<Scalars['ID']['output']>;
  released_at: Scalars['Time']['output'];
  slug: Scalars['String']['output'];
  status: Scalars['Int']['output'];
  tags?: Maybe<Array<Maybe<ArticleTag>>>;
  thumbnail?: Maybe<ArticleThumbnail>;
  thumbnail_image?: Maybe<Medium>;
  thumbnail_image_id?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['Time']['output'];
};


export type ArticleCollaboratorsArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
};


export type ArticleTagsArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleCondition = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleLastModifiedUser = {
  __typename?: 'ArticleLastModifiedUser';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ArticleMetaData = {
  __typename?: 'ArticleMetaData';
  canonical: Scalars['String']['output'];
  credit?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  footer_script: Scalars['String']['output'];
  header_script: Scalars['String']['output'];
  index_title: Scalars['String']['output'];
  seo_title: Scalars['String']['output'];
  source_author?: Maybe<Scalars['String']['output']>;
  source_link?: Maybe<Scalars['String']['output']>;
  summary: Scalars['String']['output'];
};

export type ArticleTag = {
  __typename?: 'ArticleTag';
  created_at: Scalars['Time']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tagged_articles: TaggedArticles;
  updated_at: Scalars['Time']['output'];
};


export type ArticleTagTagged_ArticlesArgs = {
  filter?: InputMaybe<TaggedArticlesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page_index?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleTagCondition = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleTagsFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ArticleThumbnail = {
  __typename?: 'ArticleThumbnail';
  caption?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Medium>;
  source?: Maybe<Scalars['String']['output']>;
  source_is_external: Scalars['Boolean']['output'];
};

export type ArticlesFilter = {
  collect_by?: InputMaybe<CollectByFilter>;
  except?: InputMaybe<ExceptArticleFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticlesPreviewFilter = {
  collect_by?: InputMaybe<CollectByFilter>;
  end_at_greater_than?: InputMaybe<Scalars['Time']['input']>;
  except?: InputMaybe<ExceptArticleFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  released_at_less_than?: InputMaybe<Scalars['Time']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  statuses?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Collaborator = {
  __typename?: 'Collaborator';
  created_at: Scalars['Time']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updated_at: Scalars['Time']['output'];
};

export type CollectByFilter = {
  except_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  except_slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CollectedArticles = {
  __typename?: 'CollectedArticles';
  articles?: Maybe<Array<Article>>;
  total_count: Scalars['Int']['output'];
};

export type Collection = {
  __typename?: 'Collection';
  children?: Maybe<Array<Collection>>;
  collected_articles: CollectedArticles;
  created_at: Scalars['Time']['output'];
  depth: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  main_image?: Maybe<Medium>;
  main_image_id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<CollectionMetaData>;
  non_display: Scalars['Boolean']['output'];
  parent_id: Scalars['ID']['output'];
  parents?: Maybe<Array<Collection>>;
  queue: Scalars['Int']['output'];
  siblings?: Maybe<Array<Collection>>;
  slug: Scalars['String']['output'];
  sponsored_by?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['Int']['output'];
  updated_at: Scalars['Time']['output'];
};


export type CollectionCollected_ArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page_index?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionCondition = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionMetaData = {
  __typename?: 'CollectionMetaData';
  index_title: Scalars['String']['output'];
  seo_description: Scalars['String']['output'];
  seo_title: Scalars['String']['output'];
  spelling_variants?: Maybe<Array<Scalars['String']['output']>>;
};

export type CollectionsFilter = {
  depth?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DataAsset = {
  __typename?: 'DataAsset';
  advanced_setting: Scalars['String']['output'];
  created_at: Scalars['Timestamp']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  slugs?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  type: DataAssetType;
  updated_at: Scalars['Timestamp']['output'];
};

export enum DataAssetType {
  ArticleList = 'ARTICLE_LIST',
  CollectionList = 'COLLECTION_LIST',
  TagList = 'TAG_LIST',
  Unspecified = 'UNSPECIFIED'
}

export type ExceptArticleFilter = {
  collect_by?: InputMaybe<CollectionsFilter>;
};

export type Medium = {
  __typename?: 'Medium';
  domain: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<MediumMetaData>;
  prefix: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uri: Scalars['Map']['output'];
  url: Scalars['String']['output'];
};

export type MediumCondition = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MediumMetaData = {
  __typename?: 'MediumMetaData';
  alt: Scalars['String']['output'];
  caption: Scalars['String']['output'];
  content_length: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  source: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type PageType = {
  __typename?: 'PageType';
  ad_order: Scalars['Int']['output'];
  created_at: Scalars['Time']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  identifier: Scalars['String']['output'];
  spaces?: Maybe<Array<AdSpace>>;
  updated_at: Scalars['Time']['output'];
};

export type PageTypeFilter = {
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  adSpace: AdSpace;
  adText: AdText;
  article?: Maybe<Article>;
  articleCount: Scalars['Int']['output'];
  articlePreview?: Maybe<Article>;
  articleTag?: Maybe<ArticleTag>;
  articleTagPreview?: Maybe<ArticleTag>;
  articleTags?: Maybe<Array<ArticleTag>>;
  articleTagsPreview?: Maybe<Array<ArticleTag>>;
  articles?: Maybe<Array<Article>>;
  articlesPreview?: Maybe<Array<Article>>;
  collaborators?: Maybe<Array<Collaborator>>;
  collection?: Maybe<Collection>;
  collectionPreview?: Maybe<Collection>;
  collections?: Maybe<Array<Collection>>;
  collectionsPreview?: Maybe<Array<Collection>>;
  dataAsset: DataAsset;
  dataAssets?: Maybe<Array<DataAsset>>;
  medium?: Maybe<Medium>;
  pageTypeAdSpaces?: Maybe<Array<PageType>>;
};


export type QueryAdSpaceArgs = {
  condition: AdSpaceCondition;
};


export type QueryArticleArgs = {
  articleCondition: ArticleCondition;
};


export type QueryArticlePreviewArgs = {
  articleCondition: ArticleCondition;
};


export type QueryArticleTagArgs = {
  condition: ArticleTagCondition;
};


export type QueryArticleTagPreviewArgs = {
  condition: ArticleTagCondition;
};


export type QueryArticleTagsArgs = {
  filter?: InputMaybe<ArticleTagsFilter>;
};


export type QueryArticleTagsPreviewArgs = {
  filter?: InputMaybe<ArticleTagsFilter>;
};


export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticlesFilter>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page_index?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArticlesPreviewArgs = {
  filter?: InputMaybe<ArticlesPreviewFilter>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page_index?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCollectionArgs = {
  collectionCondition: CollectionCondition;
};


export type QueryCollectionPreviewArgs = {
  collectionCondition: CollectionCondition;
};


export type QueryCollectionsArgs = {
  filter?: InputMaybe<CollectionsFilter>;
};


export type QueryCollectionsPreviewArgs = {
  filter?: InputMaybe<CollectionsFilter>;
};


export type QueryDataAssetArgs = {
  id: Scalars['String']['input'];
};


export type QueryMediumArgs = {
  mediumCondition: MediumCondition;
};


export type QueryPageTypeAdSpacesArgs = {
  filter?: InputMaybe<PageTypeFilter>;
};

export type TaggedArticles = {
  __typename?: 'TaggedArticles';
  articles?: Maybe<Array<Article>>;
  total_count: Scalars['Int']['output'];
};

export type TaggedArticlesFilter = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id: string, title: string, slug: string, body: string, thumbnail?: { __typename?: 'ArticleThumbnail', caption?: string | null, image?: { __typename?: 'Medium', url: string } | null } | null, tags?: Array<{ __typename?: 'ArticleTag', slug: string, name: string } | null> | null, collaborators?: Array<{ __typename?: 'Collaborator', name: string, slug: string }> | null } | null };

export type ArticlesQueryVariables = Exact<{
  page?: Scalars['Int']['input'];
  limit?: Scalars['Int']['input'];
  order?: Scalars['String']['input'];
}>;


export type ArticlesQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, title: string, slug: string, thumbnail?: { __typename?: 'ArticleThumbnail', caption?: string | null, image?: { __typename?: 'Medium', url: string } | null } | null }> | null };


export const ArticleDocument = gql`
    query article($slug: String!) {
  article(articleCondition: {slug: $slug}) {
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

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const ArticlesDocument = gql`
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

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
      }
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
        }
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;