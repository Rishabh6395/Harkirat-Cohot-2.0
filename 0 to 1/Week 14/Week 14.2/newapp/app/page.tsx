import axios from "axios";
import Image from "next/image";

import { Button } from "./components/Button"
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";


async function getUserDetails()  {
  // await new Promise ((r) => setTimeout(r,5000))
  const reponse = await axios.get("http://localhost:3000/api/user")
  console.log(reponse)
  return reponse.data;
}

export default async function Home() {
 
  const userDetails = await getUserDetails()
  return (
    <div className="justify-center p-12">
      hi
      <Button/>
      <div className="pl-3">
        {userDetails.username}
        <br />
        {userDetails.password}
      </div>
    </div>
  );
}
