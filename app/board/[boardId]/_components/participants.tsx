"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import UserAvatar from "./User-avatar";
import { getColor } from "@/lib/utils";

const MAX_SHOWN_USERS = 2;

const Participants = () => {
  const users = useOthers();
  const currUser = useSelf();
  const hasMoreUser = users.length > MAX_SHOWN_USERS;

  return (
    <div className="absolute bottom-1 right-[50%] translate-x-[50%] h-12 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={getColor(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}
        {currUser && (
          <UserAvatar
            borderColor={getColor(currUser.connectionId)}
            src={currUser.info?.picture}
            name={`${currUser.info?.name} (You)`}
            fallback={currUser.info?.name?.[0]}
          />
        )}
        {hasMoreUser && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export default Participants;
