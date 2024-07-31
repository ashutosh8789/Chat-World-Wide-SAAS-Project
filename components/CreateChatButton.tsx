"use client"
import { MessageSquarePlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useSubscriptionStore } from '@/store/store';
import { useToast } from './ui/use-toast';
import {v4 as uuidv4} from "uuid";
import { serverTimestamp, setDoc } from 'firebase/firestore';
import { addChatRef } from '@/lib/converters/ChatMembers';

function CreateChatButton({isLarge}: {isLarge?:boolean}) {
    const {data:session} = useSession();
    const router  = useRouter();
    const [ loading,setLoading ]= useState(false);
    const {toast} = useToast();
    const subscription = useSubscriptionStore((state) => state.subscription);

    


    const createNewChat = async() => {
        // all  the logic here...


        if(!session?.user.id) return;
        setLoading(true);
        toast({
            title:"Creating new chat...",
            description: "Hold tight while we create your new chat...",
            duration:3000,
        });


        //TODO: CHECK IF USER IS PRO AND LIMIT THEM CREATING A NEW CHAT

        //.........

        //----------



        const chatId = uuidv4();

        await setDoc(addChatRef(chatId,session.user.id),{
            userId:session.user.id!,
            email:session.user.email!,
            timestamp:serverTimestamp(),
            isAdmin:true,
            chatId:chatId,
            image:session.user.image || "",
        }).then(()=> {
            toast({
                title:"Success",
                description: "Your chat has been created!",
                className: "bg-green-600 text-white",
                duration:2000,

            });
            router.push(`/chat/${chatId}`);
        }).catch(()=>{
           toast({
            title:"Error",
            description: "There was an error creating ypur cchat!",
            variant:"destructive",
           });
        }).finally(()=>{
            setLoading(false);
        })



        router.push('/chat/new');
    }
    return (
        <Button onClick={createNewChat} size={'icon'} variant={'ghost'}>
            <MessageSquarePlusIcon className="text-black dark:text-white"/>
            <span className="text-black dark:text-white">Invite</span>
        </Button>
    )
}

export default CreateChatButton;