import { NextPageWithLayout } from 'next'
import DefaultLayout from '@/components/layout/default-layout'

const About: NextPageWithLayout = () => {
  return (
    <>
      <h1>About</h1>
    </>
  )
}

About.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default About
