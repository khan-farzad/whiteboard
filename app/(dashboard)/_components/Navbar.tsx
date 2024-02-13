import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="bg-blue-950 flex items-center gap-x-4 p-5">
        <UserButton/>
    </div>
  )
}

export default Navbar