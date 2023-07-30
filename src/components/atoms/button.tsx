import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

type Props = {
  label: string
  href: string
  bgColor?: 'black' | 'white'
}

const Button: FC<Props> = (props) => {
  return (
    <StyledBtn href={props.href} $bgColor={props.bgColor}>
      {props.label}
    </StyledBtn>
  )
}

const StyledBtn = styled(Link)<{ $bgColor?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border-radius: 25px;
  background: ${(props) => (props.$bgColor ? props.$bgColor : '#000')};

  ${({ $bgColor }) =>
    $bgColor === 'black'
      ? `
  background: #000;
  color: #fff;
  `
      : $bgColor === 'white' &&
        `
  background: #fff;
  `}
`

export default Button
