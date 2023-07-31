import { useCallback, useState } from "react"

// テキスト追加関数
export const useInputArray = () => {
    const [array, setArray] = useState<string[]>([]);
    const [text, setText] = useState("");
    
    // テキストフォーム
    const handleChange = useCallback((e: any) => {
      if (e.target.value.length > 5){
        alert("5文字以内にして下さい");
        return;
      }
      setText(e.target.value.trim());
    },[]);
  
    // 追加
    const handleAdd = useCallback(() => {
      setArray((prevArray: string[]) => {
        if (prevArray.some(item => item === text)) {
          alert("same text");
          return prevArray;
        }
        return [...prevArray, text];
      })
    },[text])
  
    return {array, text, handleChange, handleAdd};
  }