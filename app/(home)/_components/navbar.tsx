import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 py-4'>
      <section className='w-full flex items-center justify-between max-w-[1400px] mx-auto px-4 xxl:px-0'>
        <Link href={'/'}>
          <Logo />
        </Link>


        <div className='hidden lg:flex items-center'>
          <Button variant="link" className='cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline'>
            Home
          </Button>
          <Button variant="link" className='cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline'>
            Services
          </Button>
          <Button variant="link" className='cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline'>
            Projects
          </Button>
          <Button variant="link" className='cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline'>
            Prices
          </Button>
          <Button variant="link" className='cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline'>
            Contact us
          </Button>

          <Link href={'sign-in'}>
            <Button variant={'outline'} className='cursor-pointer ml-8'>
              Sign in
            </Button>
          </Link>
          
        </div>
        {/* on large screen dont show */}
        <Button variant="ghost" size="icon" className='cursor-pointer lg:hidden'>
          <Menu />
        </Button>
      </section>
    </nav>
  )
}

export default Navbar