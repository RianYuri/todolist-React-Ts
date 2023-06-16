import * as C from "./styles";
import { useState } from "react";
type props = {
    onEnter:(taskName:string)=> void
}
export const AddArea = ({onEnter}:props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e:React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.code);
    if(e.code === 'Enter' && inputText !== ''){
        onEnter(inputText);
        setInputText('');
    }
  };
  console.log(inputText);
  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
