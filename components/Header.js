import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div className="header container--large">
    <div className="header__circle"></div>
      <Link href="/">
        <a className="logo">Camonote</a>
      </Link>
    </div>
)

export default Header
