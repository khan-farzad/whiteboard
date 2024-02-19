'use client'
import { useOrganization } from "@clerk/nextjs"
import EmptyOrg from "./_components/EmptyOrg"
import BoardList from "./_components/BoardList"

interface DashboardPageProps {
  searchParams: {
    search?: string,
    favorites?: string
  },
}

const Dashboard = ({searchParams}: DashboardPageProps) => {
  const {organization} = useOrganization();
  return (
    <div className="h-[calc(100%-80px)] ">
      {organization ? (<p>{JSON.stringify(searchParams)}</p>) : <EmptyOrg/>}
      <BoardList orgId="sdfa" query={searchParams}/>
      </div>

  )
}

export default Dashboard