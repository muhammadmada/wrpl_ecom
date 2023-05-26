import footer from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className={footer.foot}>
                <div className={footer.content}>
                <p>
                    made with &lt;3 in the interwebz.
                </p>
                </div>
            </div>
        </>
    )
}

export default Footer