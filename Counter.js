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
          {/* saya tian
          <Typist.Delay ms={3250} />
          <Typist.Backspace count={9}/>
          i like nirvana
          <Typist.Delay ms={3250} />
          <Typist.Backspace count={14}/>
          adobe family is my poison
          <Typist.Delay ms={3250} />
          <Typist.Backspace count={25}/>
          i don't really make videos anymore 
          <Typist.Delay ms={3250} />
          <Typist.Backspace count={34}/>
          tinggal di lab ilkom/ropd
          <Typist.Delay ms={3250} />
          <Typist.Backspace count={25}/>
          i code python and javascript
          <Typist.Delay ms={3250} />
          <Typist.Backspace count={28}/>
          i love to eat tahu tek 
          <Typist.Delay ms={3250} />
          <Typist.Backspace count={24}/> */}
          <FontAwesomeIcon icon="beer" /> 
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