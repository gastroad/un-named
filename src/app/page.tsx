'use client';

import { useEffect } from "react";
import { testState } from "../state/atoms/testAtom"
import { useRecoilState } from "recoil"

export default function Home() {
  const [testStateValue, setTestStateValue] = useRecoilState(testState)

  setTimeout(() => {
    setTestStateValue("well")
  }, 1000)

  useEffect(() => {
    console.log(testStateValue)
  }, [testStateValue])

  return (
    <main>
      home
    </main>
  )
}
