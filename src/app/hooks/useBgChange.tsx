import { useEffect } from "react"

// バックグラウンド変更関数
export const useBgChange = () => {
    useEffect(() => {
      document.body.style.backgroundColor = "";
  
      return () => {
        document.body.style.backgroundColor = "cyan";
      };
    }, []);
  }