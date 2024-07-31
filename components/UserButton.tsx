"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import UserAvatar from "./UserAvatar";
import { useSubscriptionStore } from "@/store/store";
import LoadingSpinner from "./LoadingSpinner";
import { StarIcon } from "lucide-react";
import ManageAccountButton from "./ManageAccountButton";

const UserButton = ({ session }: { session: Session | null }) => {
    const subscription = useSubscriptionStore((state) => state.subscription);



    if (!session) {
        return (
            <Button variant={"outline"} onClick={() => signIn()}>
                Sign In
            </Button>
        )
    };



    return session && (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar name={session.user?.name} image={session.user?.image} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {subscription === undefined && (
                    <DropdownMenuItem>
                        <LoadingSpinner />
                    </DropdownMenuItem>
                )}

                {subscription?.role === 'pro' && (
                    <>
                        <DropdownMenuLabel
                            className="text-sm flex items-center  space-x-1 text-[#E935CA] animate-pulse"
                        >
                            <StarIcon fill='#E935CA' />
                            <p>PRO</p>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><ManageAccountButton/></DropdownMenuItem>
                    </>
                )}


                <DropdownMenuItem onClick={(() => signOut())}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserButton