import { MessageBox } from "react-chat-elements"
import './Chat.scss';
import { Input, Button, Avatar } from 'react-chat-elements'

const Chat = () => {
    return (
        <div className='chat'>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <MessageBox
                    position={"right"}
                    type={"text"}
                    title={"Rifat"}
                    text="Here is a text type message box"
                    date="Aug 15, 2023"
                    status="read"
                    focus={true}
                />
                <Avatar
                    src="https://avatars.githubusercontent.com/u/80540635?v=4"
                    alt="avatar"
                    size="xlarge"
                    type="circle"
                    className='avatar1'
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <MessageBox
                    position={"right"}
                    type={"text"}
                    title={"Rifat"}
                    text="Here is a text type message box"
                    date="Aug 15, 2023"
                    status="read"
                    focus={true}
                />
                <Avatar
                    src="https://avatars.githubusercontent.com/u/80540635?v=4"
                    alt="avatar"
                    size="xlarge"
                    type="circle"
                    className='avatar1'
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Avatar
                    src="https://avatars.githubusercontent.com/u/80540635?v=4"
                    alt="avatar"
                    size="xlarge"
                    type="circle"
                    className='avatar2'
                />
                <MessageBox
                    position={"left"}
                    type={"photo"}
                    title={"Suraj"}
                    date="Aug 16, 2023"
                    data={{
                        uri: "https://picsum.photos/200/200",
                    }}
                    avatar={'https://avatars.githubusercontent.com/u/80540635?v=4'}
                    focus={false}
                    status="sent"
                />
            </div>
            <div className='parent'>
                <Input
                    placeholder="Type here..."
                    multiline={true}
                    className='input'
                />
                <Button color='white' backgroundColor='green' text='Send' className='button' />
            </div>
        </div>
    )
}

export default Chat;