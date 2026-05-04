import { useState } from "react";
import { useStore } from "../store/useStore";

export default function Register() {
  const { register } = useStore();
  const [data, setData] = useState({});

  return (
    <div>
      <input onChange={e=>setData({...data,name:e.target.value})}/>
      <input onChange={e=>setData({...data,email:e.target.value})}/>
      <input type="password" onChange={e=>setData({...data,password:e.target.value})}/>
      <button onClick={()=>register(data)}>Register</button>
    </div>
  );
}