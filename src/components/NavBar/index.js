import React from 'react'

import { Products, Developers, Company } from '../Content'
import { Container, DropdownStyles } from './styles'
import { DropdownOption, DropdownProvider } from '../Dropdown'

function NavBar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
              />
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
              />
              <DropdownOption
                name="Empresa"
                content={Company}
              />
            </li>
          </ul>
        </Container>
      </DropdownStyles>
    </DropdownProvider>

  )
}

export default NavBar
