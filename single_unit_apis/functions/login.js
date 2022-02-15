import { group, check, sleep } from 'k6';
import http from 'k6/http';
/**
 * authorizes user with access token
 * @param {*} username 
 * @param {*} password 
 * @returns access token
 */
let login = function(username, password){
    let response, redirectUrl, json;
    response = http.post("https://qa-practical.qa.swimlane.io/api/user/login",
    `{\"username\":\"${username}\",\"password\":\"${password}\"}`,
        {
            "headers": {
                "pragma": "no-cache",
                "cache-control": "no-cache",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
                "x-b3-traceid": "a2503d17c430a2cb2d93b185a583243b",
                "traceparent": "00-a2503d17c430a2cb2d93b185a583243b-d06428a3183a9557-00",
                "sec-ch-ua-mobile": "?0",
                "authorization": "Bearer",
                "uber-trace-id": "a2503d17c430a2cb2d93b185a583243b:d06428a3183a9557:0:00",
                "content-type": "application/json",
                "accept": "application/json, text/plain, */*",
                "x-b3-spanid": "d06428a3183a9557",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
                "x-b3-sampled": "0",
                "sec-ch-ua-platform": "\"Windows\"",
                "origin": "https://qa-practical.qa.swimlane.io",
                "sec-fetch-site": "same-origin",
                "sec-fetch-mode": "cors",
                "sec-fetch-dest": "empty",
                "referer": "https://qa-practical.qa.swimlane.io/login",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9"
            }
        }
    )
    if(!check(response, {
        "Auth returns 200": response => response.status.toString() === "200",
      })){
          let checker = {}
          checker[`Error Code: ${response.error_code} - URL: ${response.url} - Response: ${response.body} - Request: ${response.request.body}`] = () => { return false }
          check(response, checker)
        };
    //console.log(res.body)
    let resJson = JSON.parse(response.body)
    let token = resJson.token
    console.log(token)
    return token
}
export{login}