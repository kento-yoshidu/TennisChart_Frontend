import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// import { data, data2 } from '../data/data'

import styles from "../styles/chart.module.css"

const fetchData = async () => {
  const res = await fetch("/api/api1")
  return res.json()
}

const Chart = () => {
  const data1 = useQuery("data1", fetchData)

  if (data1.isLoading) {
    return <span>Loading...</span>
  }

  return (
    <>
      <section className={styles.wrapper}>
        <h2>GSの支配率</h2>

        <p>2004年から2022年まで、年間でBIG4以外の選手が複数のGSを優勝したことはありません。つまり、20年近くに渡って、年間3つ以上のGSタイトルをBIG4が占めていたということです。</p>

        <p>2020年はウィンブルドンの開催はありませんでした。</p>

        <ResponsiveContainer width="60%" aspect={4.0/3.0}>
          <BarChart
            data={data1.data.data1}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="year" />
            <YAxis />

            <Tooltip />

            <Legend />

            <Bar dataKey="Roger Federer" stackId="a" fill="#32cd32" />
            <Bar dataKey="Rafael Nadal" stackId="a" fill="#a0522d" />
            <Bar dataKey="Novak Dokovic" stackId="a" fill="#1e90ff" />
            <Bar dataKey="Andy Murray" stackId="a" fill="#9400d3" />
            <Bar dataKey="other" stackId="a" fill="#dddddd" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/*
      <section className={styles.wrapper}>
        <h2>GS、MSの支配率</h2>

        <ResponsiveContainer width="60%" aspect={4.0/3.0}>
          <BarChart
            data={data2.data.data2}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Roger Federer" stackId="a" fill="#32cd32" />
            <Bar dataKey="Rafael Nadal" stackId="a" fill="#a0522d" />
            <Bar dataKey="Novak Dokovic" stackId="a" fill="#1e90ff" />
            <Bar dataKey="Andy Murray" stackId="a" fill="#9400d3" />
            <Bar dataKey="other" stackId="a" fill="#dddddd" />
          </BarChart>
        </ResponsiveContainer>
      </section>
          */}
    </>
  );
}

export default Chart
