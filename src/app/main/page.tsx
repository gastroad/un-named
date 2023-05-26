'use client';

import { useEffect } from "react"
import { getPortfolioData } from "@api/portfolio";
import LoginFrom from "@molecules/LoginForm";

export default function main() {

  const fetchPortfolioData = async () => {
    const data = await getPortfolioData()
    console.log("client", data)
  }

  useEffect(() => {
    fetchPortfolioData()
  }, [fetchPortfolioData])

  return (<main>main
    <LoginFrom />
  </main>)
}
