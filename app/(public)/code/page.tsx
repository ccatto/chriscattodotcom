import JumbotronCattoCode from "../../components/JumbotronCattoCode/JumbotronCattoCode"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chris Catto Code',
    description: 'Chris Catto Code including JavaScript SFCC NextJS'
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