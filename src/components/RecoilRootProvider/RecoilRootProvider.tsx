'use client'
import type { ReactNode, } from 'react'
import { RecoilRoot } from 'recoil'


interface Props {
  children: ReactNode
}

export default function RecoilRootProvider({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>
}
