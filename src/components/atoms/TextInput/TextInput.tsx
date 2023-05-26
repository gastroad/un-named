
import type { FC } from "react"

interface Props {
    value: string
    onChange: () => void
}
const TextInput: FC<Props> = ({ value, onChange }) => {
    return <input value={value} onChange={onChange} />
}

export default TextInput