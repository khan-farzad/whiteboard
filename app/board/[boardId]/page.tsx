import Canvas from "./_components/Canvas"
import {Room} from '@/components/room'
import Loading from "./_components/Loading"
interface BoardIdProps {
  params: {
    boardId: string
  }
}

const BoardIdPage = ({params}:BoardIdProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading/>}>
    <Canvas boardId={params.boardId}/>
    </Room>
  )
}

export default BoardIdPage