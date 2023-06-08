import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput(props) {
  const { channelName, channelId, chatRef } = props;
  const [user] = useAuthState(auth);

  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault(); //prevents refresh of form
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form action="">
        <input
          value={input}
          placeholder={`Message ${channelName}`}
          onChange={onChange}
        />
        {/* A button inside a form will submit the form on pressing enter, that's why button is kept hidden */}
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
