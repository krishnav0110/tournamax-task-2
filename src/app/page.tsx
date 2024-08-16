"use client"
import styles from "./page.module.css";

import { useMemo } from "react";
import dynamic from 'next/dynamic'



export default function Home() {
  const Map = useMemo(() => dynamic(
    () => import('@/app/components/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div className={styles.con}>
      <Map position={[22.6139, 79.209]} zoom={5} />
    </div>
  );
}
