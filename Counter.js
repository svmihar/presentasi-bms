import React from 'react'
import styled from '@emotion/styled'
import { space, color } from 'styled-system'
import Typist from 'react-typist'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faBeer } from "@fortawesome/free-solid-svg-icons";

const Root = styled.div({
  display: 'flex',
  justifyContent:'left'
})

library.add(faCode, faBeer);

export default class Counter extends React.Component {

  render() { 
    return (
      <Root>
        <Typist>
          <br/>
          visit me at
          <br/>
          github.com/svmihar/
          <br/>
          @svmihar 
          <Typist.Delay ms={3250} />
        </Typist>
      </Root>
    )
  }
}