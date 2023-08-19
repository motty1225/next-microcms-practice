import styled from 'styled-components'
import { GetStaticProps, NextPageWithLayout } from 'next'
import { client } from '@/lib/client'
import DefaultLayout from '@/components/layout/default-layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

type Props = {
  data: []
}

const Home: NextPageWithLayout<Props> = (props) => {
  const router = useRouter()
  const [indexState, setIndexState] = useState(props.data)
  console.log(props)

  useEffect(() => {
    console.log(router)
  }, [router])

  return (
    <>
      <button
        onClick={() => {
          setIndexState([])
        }}
      >
        button
      </button>
      <Main>index page</Main>
    </>
  )
}

const Main = styled.main``

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.get({ endpoint: 'news' })

  return {
    props: {
      data: res.contents,
    },
  }
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
