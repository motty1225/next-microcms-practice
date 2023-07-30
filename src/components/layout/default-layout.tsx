import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const DefaultLayout: FC<Props> = (props) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  )
}

const Main = styled.main``

export default DefaultLayout
