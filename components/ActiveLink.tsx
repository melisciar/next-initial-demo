import { CSSProperties } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

const style: CSSProperties = {
    color: '#0070F3',
    textDecoration: 'underline'
}

interface Props {
    text: string,
    href: string
}

export const ActiveLink: React.FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter()

    return (
        <Link href={ href }>
        <span style={ asPath === href ? style : undefined }>{ text }</span> 
        </Link>
    )
}
