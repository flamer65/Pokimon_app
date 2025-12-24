import Button from "./Button";
export default function Navbar({navigate}: {navigate: (path: string) => void}) {
  return (
    <header className=" bottom-0 flex top-0 min-w-full max-h-16  mb-3 p-3 justify-between items-center bg-neutral-900  tracking-tight rounded-md ">
        <div><img src="pokeapi_256.png" alt="" className="w-18" /></div>
        <nav className="flex gap-2 items-center justify-center">
          <NavbarLink link="">Home</NavbarLink>
          <NavbarLink link="">About</NavbarLink>
          <NavbarLink link="">Contact</NavbarLink>
        </nav>
        <div className="flex gap-2 items-center justify-center">
          <Button onClick={() => navigate("/login")}>Sign In/up</Button>
          
        </div>
        
       
    </header>
  )
}

function NavbarLink({link, children}: {link: string, children: string}) {
    return (
       <div className='font-sans max-md:hidden flex items-center justify-center hover:bg-neutral-800 p-2 rounded-md'>
        <a href={link}>{children}</a>
       </div>
    )
}
