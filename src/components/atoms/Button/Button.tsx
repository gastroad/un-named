
import type { FC } from "react"

interface Props {
    value: string
    onClick: () => void
}
const Button: FC<Props> = ({ value, onClick }) => {
    return <button onClick={onClick}>{value}</button>
}

export default Button