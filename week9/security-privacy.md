# Web Security and Privacy

## Security
- Cross Site Scripting - attacker inserts HTML on webpage, can steal user information
    - Can replicate front-ends, ex: login page takes down your user, pass, etc.
    - GET request > attacker provides a link, attaches to end of url
    - Mitigation:
        - don't allow any/malicious html to be inserted, similar techniques for SQL Injection
- DDoS - Districbuted Denial of Service
    - Overwhelm a server with a large amount of malicious requests to block users
    - Websites can't tell if user is a human or not
    - Attacker uses multiple controlled machines
    - Mitigation:
        - Limit volume of requests from a user
        - Throw out excess traffic randomly
        - Distribute traffic
        - Use a provider such as DigitalOcean, Vercel
- HTTPS is secure, HTTP is not

## Privacy
- Cookie - name/value pair created by website to store information
- Privacy Policy/TOS - statement saying what website does with any information it collects
    - "Implied Agreement"