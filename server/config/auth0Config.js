import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "dev-e8z12c5ddvizfmjs.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck