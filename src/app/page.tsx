import { getPortfolioData } from "@api/portfolio";

export default async function Home() {
  const data = await getPortfolioData();

  console.log(data.portfolio[0].title, "server")

  return (
    <main>
      {data.portfolio[0].title}home
    </main>
  )
}
