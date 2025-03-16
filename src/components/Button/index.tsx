import { ButtonLink } from './styles'

export type Props = {
    to?: string
    children: string
}

const Button = ({children, to}: Props) => {
    return (
        <ButtonLink to={to as string}>
            {children}
        </ButtonLink>
    )
}

export default Button