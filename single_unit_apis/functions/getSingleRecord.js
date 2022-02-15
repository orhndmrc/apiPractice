import { group, check, sleep } from 'k6';
import http from 'k6/http';

/**
 * gives single record details
 * @param {*} token 
 * @param {*} recordId 
 */
let getSingleRecord = function(token,recordId){
    let response, redirectUrl, json;
    response = http.get("https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J/record/"+recordId+"",
    {
        "cookies": {
        ".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
    },
    "headers": {
            "pragma": "no-cache",
            "cache-control": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
            "x-b3-traceid": "b05e1b6329a118470a4fa0983bae8f03",
            "traceparent": "00-b05e1b6329a118470a4fa0983bae8f03-fefcf221ec20233e-01",
            "sec-ch-ua-mobile": "?0",
            "authorization": "Bearer "+token+"",
            "uber-trace-id": "b05e1b6329a118470a4fa0983bae8f03:fefcf221ec20233e:0:01",
            "accept": "application/json, text/plain, */*",
            "x-b3-spanid": "fefcf221ec20233e",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
            "x-b3-sampled": "1",
            "timezone": "America/New_York",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9"
        }
    }
)

if(!check(response, {
    "get single record details returns 200 ": response => response.status.toString() === "200",
  })){
      let checker = {}
      checker[`Error Code: ${response.error_code} - URL: ${response.url} - Response: ${response.body} - Request: ${response.request.body}`] = () => { return false }
      check(response, checker)
    };
    console.log(response.body)
}
export{getSingleRecord}