import {Loader} from 'lucide-react'
import {InfoSkeleton} from './Info'

const Loading = () => {
  return (
    <div className='h-full w-full bg-neutral-100 touch-none flex items-center justify-center'>
        <Loader className='h-6 w-6 text-muted-foreground animate-spin'/>
        <InfoSkeleton/>
    </div>
  )
}

export default Loading