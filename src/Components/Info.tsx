import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { isBrowser } from 'react-device-detect'

const ICONS = [
  { name: "facebook", link: "https://www.facebook.com/hta218" },
  { name: "linkedin", link: "https://www.linkedin.com/in/anhht218/" },
  { name: "twitter", link: "https://twitter.com/hta218_" },
]

const Info = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank")
  }

  if (!isBrowser) { return null }

  return <StyledInfo className="item">
    Leo @ hta218
    {
      ICONS.map((icon: { name: any, link: string }, idx) => {
        return <Icon
          key={idx}
          link
          name={icon.name}
          onClick={() => handleClick(icon.link)}
        />
      })
    }
  </StyledInfo>
}

const StyledInfo = styled.div`
  position: fixed !important;
  bottom: 0;
  width: 15rem;
`

export default Info