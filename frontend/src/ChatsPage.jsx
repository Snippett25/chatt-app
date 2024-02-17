import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
        <PrettyChatWindow
            projectId="
            eff29035-b336-434e-8399-d5443ee589ff"
            username={props.user.username}
            secret={props.user.username}
            style={{height:'100%'}}
        />
    </div>
  );
};

export default ChatsPage;