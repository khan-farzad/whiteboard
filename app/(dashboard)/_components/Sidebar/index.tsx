import List from "./list"
import NewButton from "./new-button"

const SideBar = () => {
  return (
    <aside className="p-4 flex z-[1] w-[60px] flex-col gap-y-3 fixed bg-green-500 h-full left-0">
      <List/>
      <NewButton/>
    </aside>
  )
}

export default SideBar