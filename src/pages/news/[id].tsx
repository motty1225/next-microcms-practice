import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '@/lib/client'
import Image from 'next/image'
import Button from '@/components/atoms/button'
import { ParsedUrlQuery } from 'querystring'

interface Params extends ParsedUrlQuery {
  id?: string
}

type Props = {
  data: {
    content: string
    createdAt: string
    eyecatch: {
      url: string
      height: number
      width: number
    }
    id: string
    publishedAt: string
    revisedAt: string
    title: string
    updatedAt: string
  }
}

const NewsDetail: NextPage<Props> = (props) => {
  console.log(props)

  return (
    <>
      <h1>{props.data.title}</h1>
      <Image src={props.data.eyecatch.url} width={1000} height={500} alt={''} />
      <div dangerouslySetInnerHTML={{ __html: props.data.content }}></div>
      <Button href={'/'} label={'トップへ戻る'} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.get({ endpoint: 'news', queries: { limit: 1000 } })

  const paths = res.contents.map((post: { id: string }) => ({
    params: { id: post.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as Params
  const res = await client.get({ endpoint: 'news', contentId: id })

  return {
    props: {
      data: res,
    },
  }
}

export default NewsDetail
