interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];
  if (!data?.length && query.search) return <p>Search for something else.</p>;
  if (!data?.length && query.favorites) return <p>No favorites</p>;
  if(!data?.length) return <p>No boards present</p>
  return <div>BoardList -: {JSON.stringify(query)}</div>;
};

export default BoardList;
