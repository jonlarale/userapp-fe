import { Trash } from "lucide-react";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface User {
  username: string;
  email: string;
  avatar: string;
  user_id: number;
}

const users: User[] = [
  {
    username: "johndoe",
    email: "jon.doe@email.com",
    avatar: "/avatars/01.png",
    user_id: 1,
  },
  {
    username: "oliviamartin",
    email: "olivia.martin@email.com",
    avatar: "/avatars/02.png",
    user_id: 2,
  },
  {
    username: "jesse",
    email: "jess.rae@email.com",
    avatar: "/avatars/03.png",
    user_id: 3,
  },
  {
    username: "elidom",
    email: "eli.dom@email.com",
    avatar: "/avatars/04.png",
    user_id: 4,
  },
];

export default function UsersPage() {
  return (
    <div className="flex justify-center mt-16 ">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center lg:text-left mb-4">
          Usuarios
        </h1>
        {users.map((user) => (
          <div className="flex items-center justify-between">
            <Link href={`/users/${user.user_id}`} className="flex">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.avatar} alt="Avatar" />
                <AvatarFallback>
                  {user.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.username}
                </p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </Link>
            <div className="font-medium ml-4">
              <Button variant="outline" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
