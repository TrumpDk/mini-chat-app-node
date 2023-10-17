import http from "superagent";
import _http from "node:http";

export const getAccessTocken = async (code: string) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const postData = {
    client_id: "2a37127f1f8c99eafe86",
    client_secret: "038ead8cc5162fd5d272262ee32ae491e33615f9",
    code: code,
  };

  try {
    const response = await http
      .post("https://github.com/login/oauth/access_token")
      .send(postData)
      .set(headers)
      .timeout(10 * 1000);
    if (response.status === 200) {
      const obj = response.text && JSON.parse(response.text);
      console.log(obj, "aaac", obj.access_token);
      // const _headers = {
      //   'Authorization': `Bearer ${obj.access_token}`
      // }
      // const result = await http.get('https://api.github.com/user')
      // .set(_headers)
      // console.log(obj, "sdfs", result);

      // const options = {
      //   hostname: "https://api.github.com",
      //   port: 443,
      //   path: "/user",
      //   method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${obj.access_token}`,
      //   },
      // };
      // const req = _http.request(options, (res) => {
      //   console.log(`STATUS: ${res.statusCode}`);
      //   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
      //   res.setEncoding("utf8");
      //   res.on("data", (chunk) => {
      //     console.log(`BODY: ${chunk}`);
      //   });
      //   res.on("end", () => {
      //     console.log("No more data in response.");
      //   });
      // });

      // req.on("error", (e) => {
      //   console.error(`problem with request: ${e.message}`);
      // });
      // req.end();
    }
  } catch (error: any) {
    console.log(error.toString(), "sdfsdf");
  }
};
