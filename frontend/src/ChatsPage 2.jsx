import { PrettyChatWindow } from "react-chat-engine-pretty";
import dotenv from "dotenv";

dotenv.config();

const ChatsPage = (props) => {
  return (
    <div className="background">
        <PrettyChatWindow
            projectId={process.env.ID}
            username={props.user.username}
            secret={props.user.username}
            style={{height:'100%'}}
        />
    </div>
  );
};

export default ChatsPage;
