import Link from 'next/link'

const Footer = () => (
    <div className="footer">
      <div className="logo">camonote</div>
      <nav className="nav">
        <div className="nav__links">
          <Link href="/"><a className="nav__links__item">Privacy</a></Link>
        </div>
        <div className="nav__social">
          <Link href="/"><a className="nav__social__item">Github</a></Link>
        </div>
      </nav>
    </div>
)

export default Footer
