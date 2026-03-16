import { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type Props =
  | {
      children: ReactNode
      type: 'link'
      to: string
    }
  | {
      children: ReactNode
      type: 'button'
      onClick?: () => void
    }

const Button = (props: Props) => {
  if (props.type === 'link') {
    return <ButtonLink to={props.to}>{props.children}</ButtonLink>
  }

  return (
    <ButtonContainer type="button" onClick={props.onClick}>
      {props.children}
    </ButtonContainer>
  )
}

export default Button
