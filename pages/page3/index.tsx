import { useQuery } from 'react-query'

import Chart from "../../components/charts"
import Layout from "../../components/layout"
import PageHeader from '../../components/page-header'
import Meta from '../../components/meta'

const Page3 = () => {
  const fetchData = async () => {
    const res = await fetch("/api/api2")
    return res.json()
  }

  const { data, isLoading } = useQuery("data3", fetchData)

  return (
  <>
    <Meta
      pageTitle="3. GS、MSタイトルの支配率"
      pageDesc="description"
    />

    <Layout>
      <PageHeader
        title="2. GS、MSタイトルの支配率"
        post="2023年6月4日"
        update="23023年6月5日"
      />

      <p>MSが入っている分、支配率は少し下がっています。</p>

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

export default Page3
