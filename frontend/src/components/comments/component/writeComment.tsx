import {
  CommentInfoDiv,
  CommentInputWrapperDiv,
  CommentRecommentCancelButton,
  CommentRecommentWrapperDiv,
  CommentSendButton,
  CommentSendWrapperDiv,
  CommentWriteInput,
} from "../commentStyle";
import CommentIcon from "@mui/icons-material/Comment";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
interface selectCommentProps {
  nickname: string | null;
  cleanSelectComment: () => void;
  getCommentInput: (e: string) => void;
}

const WriteComment = ({
  nickname,
  cleanSelectComment,
  getCommentInput,
}: selectCommentProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const commentWrite = () => {
    if (inputRef.current && inputRef.current.value !== "") {
      const content = inputRef.current.value;
      getCommentInput(content);
    }
  };

  return (
    <CommentInputWrapperDiv>
      <CommentInfoDiv>
        {nickname !== null ? (
          <CommentRecommentWrapperDiv>
            {nickname}
            <CommentRecommentCancelButton onClick={cleanSelectComment}>
              <CloseIcon sx={{ color: "#FFFFFF" }} />
            </CommentRecommentCancelButton>
          </CommentRecommentWrapperDiv>
        ) : (
          <div>댓글</div>
        )}
      </CommentInfoDiv>
      <CommentWriteInput ref={inputRef} />
      <CommentSendWrapperDiv>
        <CommentSendButton onClick={commentWrite}>
          <CommentIcon sx={{ color: "#FFFFFF" }} />
        </CommentSendButton>
      </CommentSendWrapperDiv>
    </CommentInputWrapperDiv>
  );
};

export default WriteComment;