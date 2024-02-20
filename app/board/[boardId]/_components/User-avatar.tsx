import { Hint } from "@/components/hint";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
    src?: string,
    name?: string,
    fallback?: string,
    borderColor?: string
}

const UserAvatar = ({src, name, fallback, borderColor}: UserAvatarProps) => {
  return (
    <Hint label={name || 'teammate'}>
        <Avatar className="h-8 w-8 border-2" style={{borderColor: borderColor}}>
            <AvatarImage src={src}/>
            <AvatarFallback className="text-sm">
                {fallback}
            </AvatarFallback>

        </Avatar>
    </Hint>
  );
};

export default UserAvatar;
