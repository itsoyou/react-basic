import { apiClient } from "./ApiClient"

export const retrieveHelloWorldBean
    = () => apiClient.get("/hello-world-bean")

export const retrieveHelloWorldPathVariable
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`)


// export const executeBasicAuthenticationService
//     = (token) => apiClient.get(`/basicauth`,
//         {
//             headers: {
//                 Authorization: token
//             }
//         } // this is now added automatically by intercepter of apiClient.
//     )
// Access to localhost:8080/... from origin localhost:3000 has been blocked by CORS policy. No 'Access-Control-Allow-Origin' header
// => This can be resolved with Authorization header.
// And then you face another error saying: Request to preflight request doesn't pass access control check.
// 웹 브라우저는 보안상의 이유로 위험할 수 있는 요청을 보내기 전에 사전 요청(Preflight Request, OPTIONS 메서드) 을 보냅니다. Preflight는 실제 요청 전에 서버가 해당 요청을 허용하는지 확인하는 역할을 합니다.
// you need to set up another configure for CORS in Backend -> enable OPTIONS request for everybody.
// use base-auth-url to get authorization header value when login, and use it for subsequent API calls
