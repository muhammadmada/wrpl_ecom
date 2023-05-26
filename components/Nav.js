import navSyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navSyles.nav}>
            <div className={navSyles.left}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </div>
            <div className={navSyles.right}>
                <ul>
                    <li>
                        <Link href='/liked'>Liked</Link>
                    </li>
                    <li>
                        <Link href='/cart'>Cart</Link>
                    </li>
                    <li>
                        <Link href='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav