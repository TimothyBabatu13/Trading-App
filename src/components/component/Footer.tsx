import Link from "next/link"

const Footer = () => {
  return (
    <footer className="grid laptop:grid-cols-4 py-[40px]">
        <div></div>
        <div style={{color: 'rgb(255, 255, 255)'}} className="text-center text-xl mt-7">
            <h1>Top Instruments</h1>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>Apple</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>Shiba</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>Bitcoin</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>Ethereum</Link>
        </div>
        <div style={{color: 'rgb(255, 255, 255)'}} className="text-center text-xl mt-7">
            <h1>Learn More</h1>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>About Us</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>What is Leverage</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>Responsible Trading</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>How Copy Trading Works
            </Link>
        </div>
        <div style={{color: 'rgb(255, 255, 255)'}} className="text-center text-xl mt-7">
            <h1>Learn More</h1>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>Privacy</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>Cookie Policy</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>Privacy Policy</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>Terms & Conditions</Link>
            <Link style={{color: 'rgb(241, 241, 241)'}} className="block text-[15px]" href={''}>General Risk Disclosure</Link>
        </div>
    </footer>
  )
}

export default Footer