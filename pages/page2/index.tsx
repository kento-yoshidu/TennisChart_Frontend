import { useQuery } from 'react-query'

import Chart from "../../components/charts"
import Layout from "../../components/layout"
import PageHeader from '../../components/page-header'
import Meta from '../../components/meta'

const Page2 = () => {
  const fetchData = async () => {
    const res = await fetch("/api/api2")
    return res.json()
  }

  const { data, isLoading } = useQuery("data2", fetchData)

  return (
  <>
    <Meta
      pageTitle="2. GS決勝進出"
      pageDesc="description"
    />

    <Layout>
      <PageHeader
        title="2. GS決勝進出"
        post="2023年6月11日"
        update="23023年6月11日"
      />

      {isLoading
        ? (
          <p>loading...</p>
        ) : (
          <Chart data={data.data2}/>
        )}
    </Layout>
  </>
  )
}

export default Page2
