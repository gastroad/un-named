import RecoilRootProvider from "@components/RecoilRootProvider"

export const metadata = {
  title: 'un-named',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ko">
      <body>
        <RecoilRootProvider>
          {children}
        </RecoilRootProvider>
      </body>
    </html>
  )
}