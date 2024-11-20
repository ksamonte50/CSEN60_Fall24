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
    - Legally binding
    - Specifies who owns the information/data
- If you're using something free, most of the time you are the product
- Mobile OS subtly asks for data
    - contacts = "Find you friends on (social media)"
- Data gets a bad wrap, still strong to have as a web developer
    - Recommendations
    - Driving a metric (behavior optimize)
- Sensitive Info
    - Personally identifiable information - PII
        - Name, address, phone, email, demographics
    - Financial info
    - Legally sensitive (i.e. HIPPA and FERPA)
- Developers have legal responsibilities for privacy and breaches of policy
- GDPR and CCPA - government regulations on data privacy