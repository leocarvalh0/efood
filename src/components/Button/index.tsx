import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  children: string
  type: 'link' | 'button'
  to?: string
}

const Button = ({ children, type, to }: Props) => {
  if (type === 'button') {
    return <ButtonContainer type="button">{children}</ButtonContainer>
  }

  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
