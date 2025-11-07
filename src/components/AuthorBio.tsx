import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AuthorBioProps {
  name: string;
  avatar: string;
  bio: string;
}

export const AuthorBio = ({ name, avatar, bio }: AuthorBioProps) => {
  return (
    <div className="flex items-start gap-4 p-6 rounded-lg bg-muted">
      <Avatar className="h-16 w-16">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <h4 className="font-bold text-lg mb-1">{name}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
};
