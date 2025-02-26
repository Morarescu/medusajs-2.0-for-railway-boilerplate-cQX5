import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import { getRegion } from "@lib/data/regions"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

type Params = {
  searchParams: {
    sortBy?: string
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function Home({
  params: { countryCode },
  searchParams,
}: Params) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const { sortBy, page } = searchParams

  return (
    <>
      <Hero />
      <div className="py-6">
        <StoreTemplate
          sortBy={sortBy}
          page={page}
          countryCode={countryCode}
        />
      </div>
    </>
  )
}
