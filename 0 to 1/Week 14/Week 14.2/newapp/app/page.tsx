import axios from "axios";
import Image from "next/image";

async function getUserDetails()  {
  // await new Promise ((r) => setTimeout(r,5000))
  const reponse = await axios.get("http://localhost:3000/api/user")
  return reponse.data;
}

export default async function Home() {
  const userDetails = await getUserDetails()
  return (
    <div className="">
      hi
      
      {userDetails.name}
      {userDetails.email}
    </div>
  );
}
