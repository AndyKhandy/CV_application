import { useState } from "react";
import "./styles/App.css";
import EditSection from "./EditSection";
import Resume from "./Resume";

export default function App() {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "", education: "", work: ""});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };


  return (
    <div>
      <EditSection data={userInfo} onChange={handleInputChange}/>
      <Resume user={userInfo} />
    </div>
  );
}
