import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function PricingPage() {
  return (
    <>
      <MainLayout>
        <h1>Pricing page</h1>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/pricing/index.tsx</code>
          </p>
        </div>

        <div className="grid">
          <Link
            href="/"
            className="card"
            rel="noopener noreferrer"
          >
            <h2>
              Index <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>
        </div>
      </MainLayout>
    </>
  )
}
