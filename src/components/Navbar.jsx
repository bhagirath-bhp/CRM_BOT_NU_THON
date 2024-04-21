import { UserButton } from "@clerk/clerk-react"

const Navbar = () => {
  return (
    <div className="flex justify-end w-full absolute top-0 h-[10rem] backdrop-blur-sm">
        <UserButton/>
    </div>
  )
}

export default Navbar