import React from 'react'
import { View } from 'react-native'
import { observer } from 'startupjs'
import propTypes from 'prop-types'
import Avatar from '../Avatar'
import Div from '../Div'
import Span from '../Span'
import './index.styl'

const descriptionSizes = {
  xxl: 'l',
  xl: 'm',
  l: 's',
  m: 'xs',
  s: 'xs',
  xs: 'xs'
}

function User ({
  avatarUrl,
  backgroundColor,
  description,
  name,
  avatarPosition,
  size,
  status,
  onPress
}) {
  const extraAvatarStyles = { 'without-label': !name && !description }

  return pug`
    Div.root(
      styleName=[avatarPosition]
      backgroundColor=backgroundColor
      onPress=onPress
    )
      View.avatar(styleName=[avatarPosition, extraAvatarStyles])
        Avatar(
          size=size
          status=status
          url=avatarUrl
          fallback=name
        )
      View.userInfo
        View.nameWrapper(styleName=[avatarPosition])
          Span.name(size=size styleName=[avatarPosition])= name
        View.descriptionWrapper(styleName=[avatarPosition])
          Span.description(
            size=descriptionSizes[size]
            styleName=[avatarPosition]
            description
          )= description
  `
}

User.defaultProps = {
  avatarPosition: 'right',
  size: 'm'
}

User.propTypes = {
  avatarUrl: propTypes.string,
  description: propTypes.string,
  name: propTypes.string,
  avatarPosition: propTypes.oneOf(['left', 'right']),
  size: propTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  status: propTypes.oneOf(['online', 'away']),
  onPress: propTypes.func
}

export default observer(User)
