import JumbotronCattoCode from "../../components/JumbotronCattoCode/JumbotronCattoCode"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Catto Code',
  description: 'Chris Catto Code | Code tutorials including: JavaScript SFCC Next API\'s .NET AWS SQL CSS React GraphQL TypeScript.'
}

export default function Page() {
  return (
    <>
      <hr className="m-3" />
      <JumbotronCattoCode />
      <hr className="m-3" />
    </>
  )
}