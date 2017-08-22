/* @flow */
import * as React from 'react'

export interface Props {
  Logo: Function,
  titles: Array<string>,
  baseUrl: string
}

export interface State {}

export class Header extends React.Component<Props, State> {
  render () {
    const { Logo, titles, baseUrl } = this.props
    const logoClassName = 'nav-item title'

    const items = titles.map((title, index) =>
      <a className='nav-item' href={`${baseUrl}/${title}/`} key={index}>
        {title}
      </a>
    )

    return (
      <header className='nav'>
        <div className='nav-left'>
          {Logo(logoClassName)}
        </div>
        <div className='nav-right nav-menu'>
          {items}
        </div>
      </header>
    )
  }
}