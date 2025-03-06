"use client";

import { useEffect } from "react";
import { GiWhistle } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { switchActiveUser } from "@/lib/firebase-functions";

// USERS LIST

// const users: User[] = [
//   {
//     id: "mr540x",
//     name: "Mrudul Sir",
//     phoneNumber: "+91 93747-20195",
//     type: "coach",
//   },
//   {
//     id: "mk782p",
//     name: "Miksha Ma'am",
//     phoneNumber: "+91 20045-94972",
//     type: "coach",
//   },
//   {
//     id: "av391z",
//     name: "Avinash Sir",
//     phoneNumber: "+91 30480-81465",
//     type: "coach",
//   },
//     id: "aj624l",
//     name: "Ajay Sir",
//     phoneNumber: "+91 09847-65845",
//     type: "coach",
//   },
//     id: "ym837k",
//     name: "Yamini Ma'am",
//     phoneNumber: "+91 10574-09847",
//     type: "coach",
//   },
//   {
//     id: "vs210x",
//     name: "Vasu",
//     phoneNumber: "+91 12345-66789",
//     type: "student",
//   },
//   {
//     id: "yh452a",
//     name: "Yash",
//     phoneNumber: "+91 12345-55986",
//     type: "student",
//   },
//   {
//     id: "ny319z",
//     name: "Nayan",
//     phoneNumber: "+91 48636-59467",
//     type: "student",
//   },
//   {
//     id: "ar705l",
//     name: "Aryan",
//     phoneNumber: "+91 04763-94858",
//     type: "student",
//   },
//   {
//     id: "al623p",
//     name: "Alish",
//     phoneNumber: "+91 09485-83576",
//     type: "student",
//   }

const SwitchUserDropdown = ({
  activeUser,
  allUsers,
}: {
  activeUser: User;
  allUsers: User[];
}) => {
  const router = useRouter();

  const { user, users, setUser, setUsers } = useUser();
  const namePrefix = user?.type === "coach" ? "Coach" : "Student";
  const name = `${namePrefix} ${user?.name}`;

  // This can be changed to state variables, but assuming we won't add/remove current users, this should be fine
  const coaches: User[] = users.filter((u) => u.type === "coach");
  const students: User[] = users.filter((u) => u.type === "student");

  useEffect(() => {
    setUser(activeUser);
    setUsers(allUsers);
  }, [activeUser, allUsers, setUser, setUsers]);

  const handleSwitchUser = async (id: string) => {
    const newUser = users.find((u) => u.id === id);
    if (newUser) {
      await switchActiveUser(newUser);
      setUser(newUser);
      router.push("/");
      router.refresh();
      toast.success("User switched");
    }
  };

  if (!user) return;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Switch User | {name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={user?.id}
          onValueChange={handleSwitchUser}
        >
          <DropdownMenuLabel>Coaches</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {coaches.map((coach) => (
            <DropdownMenuRadioItem key={coach.id} value={coach.id}>
              <GiWhistle size={14} className="mx-2" />
              <span>{coach.name}</span>
            </DropdownMenuRadioItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Students</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {students.map((student) => (
            <DropdownMenuRadioItem key={student.id} value={student.id}>
              <PiStudent size={14} className="mx-2" />
              <span>{student.name}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { SwitchUserDropdown };
