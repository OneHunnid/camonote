import Search from './Search.js'
import Link from 'next/link'

const Prefooter = () => (
    <div className="prefooter">
      <div className="prefooter__card">
        <Search />
        <div className="prefooter__description">
          Check it out. Chat Anonymously.
        </div>
      </div>
    </div>
)

export default Prefooter
