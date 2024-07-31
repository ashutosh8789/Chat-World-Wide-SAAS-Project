import ChatList from '@/components/ChatList';
import React from 'react'

type Props = {
    params: {},
    searchParams: {
        error:string;
    };
};
const ChatsPage = () => {
  return (
    <div>
        {/* chat permission chat */}
        

        {/* ChatlIST */}
        <ChatList/>

        
        
    </div>
  )
}

export default ChatsPage