import { DarkLayout } from '@/components/layouts/DarkLayout'
import { MainLayout } from '@/components/layouts/MainLayout'
import Link from 'next/link'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'


const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>About page</h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/about.tsx</code>
        </p>
      </div>

      <div className={"grid"}>
        <Link
          href="/"
          className={"card"}
          rel="noopener noreferrer"
          >
          <h2>
            index <span>-&gt;</span>
          </h2>
          <p>
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </Link>
      </div>
    </>
  )
}

export default AboutPage

AboutPage.getLayout = function getLayout(page: ReactElement){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}