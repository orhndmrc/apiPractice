`Prerequisits`
 1- Please install Visual Studio Code
 2- Install K6(performance and api testing tools) --> `https://k6.io/docs/getting-started/installation/`
 3-To check whether k6 installed or not, you should see big `K6` logo while running tests

`**` I used aplication id as `aF5sqnNFCc36kO9_J`


 `Running Tests`
  1-`End-toEnd Test` ---> It is created by recording all api traffic by following ui new record creation workflow
                       It represents real life user scenario as whole instead of focusing single unit apis.
                       To run `k6 run C:\Users\demircio\apiPractice\end-to-end\e2e_test.js`
                       if certificate causes problem, run by `k6 run C:\Users\demircio\apiPractice\end-to-end\e2e_test.js --insecure-skip-tls-verify`
                       Please see the report for more information 
  

  2-`Single-Unit-Apis`---> Functions created for important apis
                            a- POST - `/api/user/login`
                            b- POST - `/app/aF5sqnNFCc36kO9_J/record`
                            c- GET - `/app/aF5sqnNFCc36kO9_J/record/${recordId}`
                            d- DELETE - `/app/aF5sqnNFCc36kO9_J/record/${recordId}`
                            d-DELETE - `/app/aF5sqnNFCc36kO9_J/record`

 Run the `testRunner.js` by `k6 run C:\Users\demircio\apiPractice\single_unit_apis\testRunner.js` 
                                           or `k6 run C:\Users\demircio\apiPractice\single_unit_apis\testRunner.js --insecure-skip-tls-verify`
You can run single api's by chocie
                                                                                                      
  