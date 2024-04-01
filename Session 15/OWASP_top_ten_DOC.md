# OWASP top ten Documentation (based on 2021)

\
Here are the 2021's Top ten Cyber attacks documented with detail and information.

## Injection Attacks

Imagine sneaking a mischievous note into a good program's instructions. That's kinda like an injection attack! Hackers trick apps into running their sneaky code, letting them steal data, wreck stuff, or take control. Here you put instructions to sneak into database or document to steal data.

**The Threat:**

- Hackers inject malicious code disguised as user input.
- Applications are tricked into running it, leading to data theft, disruptions, or system takeover.

**Common Types:**

- **SQL Injection:** Sneaking into database talks to steal info.
- **XSS:** Hiding evil code in seemingly harmless messages.
- **Command Injection:** Fooling apps into following hackers orders.

**The Fix:**

- Developers:
  - Validate user input to ensure it's safe and doesn't contain malicious code.
  - Use parameterized queries for secure database interactions.
  - Escape user input before including it in HTML output to prevent XSS.
  - Keep software updated with the latest security patches.
- Everyone:
  - Use trusted sources and be cautious when clicking on links or opening attachments.
  - Keep your software updated to benefit from security fixes.

```
// This is a vulnerable login query!
username = request.getParameter("username");
password = request.getParameter("password");
String query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";

```

## Broken Authentication

Broken authentication refers to weaknesses in an application's process of verifying a user's identity. These weaknesses allow attackers to impersonate legitimate users, granting them unauthorized access to accounts, data, or systems.

**The Threat:**

- **Data breaches:** Sensitive information exposed.
- **System disruptions:** Operations halted, causing financial or reputational harm.
- **Account takeover:** Attackers impersonate users for fraud or spreading misinformation.

**Common Types:**

- **Credential stuffing:** Reusing stolen logins across platforms.
- **Brute-force attacks:** Guessing passwords systematically.
- **Weak password policies:** Easy passwords or missing multi-factor authentication.
- **Session hijacking:** Stealing session tokens to take over active sessions.
- **Flawed session management:** Applications vulnerable even without stolen credentials.

**The Fix:**

- Strong passwords & multi-factor authentication.
- Regular software updates to patch vulnerabilities.
- Secure session management with strong protocols and limited lifespans.
- Monitor for suspicious activity to identify and stop attacks.

```
// This is a terrible way to store passwords!
$username = $_POST['username'];
$password = $_POST['password'];

$query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
mysqli_query($conn, $query);

```

## Sensitive Data Exposure

Sensitive Data Exposure occurs when unauthorized individuals gain access to confidential information. This can happen unintentionally due to security gaps or through malicious attacks.

**The Threat:**

- **Personally Identifiable Information (PII):** Social Security numbers, addresses, phone numbers.
- **Financial Data:** Credit card details, bank account information.
- **Health Information:** Medical records, genetic data.
- **Intellectual Property:** Trade secrets, product designs, research data.
- **Credentials:** Usernames, passwords, access tokens.

**Common Types:**

- **Identity Theft:** Criminals can misuse exposed PII for financial gain or impersonation.
- **Financial Loss:** Stolen financial data can lead to fraudulent - charges or account takeover.
- **Privacy Violations:** Data breaches erode trust and damage reputations.
- **Compliance Issues:** Regulatory fines for violating data protection laws.

**The Fix:**

- **Data Classification:** Identify and prioritize sensitive data for stronger protection.
- **Encryption:** Secure data at rest and in transit with robust encryption algorithms.
- **Access Controls:** Limit access to sensitive data based on the principle of least privilege.
- **Security Awareness Training:** Educate employees on data security best practices.
- **Regular Security Audits:** Identify and address vulnerabilities in systems and processes.

```
// This transmits data without encryption, visible in network traffic
function submitData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch("/submit", {
    method: "POST",
    body: `name=${name}&email=${email}`
  });
}


```

## XML External Entities (XXE)

XXE vulnerabilities allow attackers to inject malicious code into seemingly harmless XML input. The application, tricked by the attacker, unknowingly executes this code, potentially leading to:

**The Threat:**

- **Data Theft:** Attackers can steal sensitive information stored on the server, like files or database contents.
- **Denial-of-Service (DoS):** Malicious code can overload the system with requests, making it unavailable to legitimate users.
- **Server-Side Request Forgery (SSRF):** Attackers can exploit XXE to force the server to make unauthorized requests to other systems, potentially compromising internal resources.

**Common Types:**

- **Planting the Seed:** Attackers embed XXE references within XML data. These references point to external entities, which can be:
-  **Local Files:** Attackers can target sensitive files on the server itself.
  - **Remote URLs:** Attackers can point to malicious code hosted elsewhere on the internet.
- **Tricking the Application:** The vulnerable application tries to access the referenced external entity.
- **Code Execution:** Malicious code hidden within the entity is then executed by the application, giving attackers a foothold on the system.

**The Fix:**

- **Disable DTDs (Document Type Definitions):** External entities are defined within DTDs. Disabling DTD processing altogether is the most secure approach, if feasible for your application.
- **Configure Secure Parsers:** If DTDs are necessary, configure XML parsers to restrict external entity access. Disallow fetching of remote entities or accessing local files outside designated directories.
- **Validate User Input:** Sanitize all incoming XML data to prevent malicious code injection.
- **Keep Software Updated:** Regularly update parsers and libraries to benefit from the latest security patches.

```
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE malicious [
    <!ELEMENT malicious ANY>
    <!ENTITY external SYSTEM "file:////etc/login.defs">
]>
<malicious>&external;</malicious>
```
Another important element of XXE attacks is that they can be used to scan ports or retrieve data from other hosts connected to the target system. For example, if the target system can connect to a file server on IP address 10.0.0.5, the attacker can retrieve sensitive data from the server like this:

```
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE malicious [
    <!ELEMENT malicious ANY>
    <!ENTITY external SYSTEM "http://10.0.0.5/sensitive.txt">
]>
<malicious>&external;</malicious>

```

## Broken Access Control

Broken Access Control occurs when weaknesses allow unauthorized users to access resources, functions, or data beyond their intended permissions. This can be like leaving the door to your valuables unlocked!

**The Threat:**

- **Weak Authentication:** Easy-to-guess passwords, lack of multi-factor authentication.

- **Improper Authorization:** Applications granting access based on flawed logic or outdated roles.

- **Misconfigured Permissions:** Overly permissive access controls granting excessive privileges.

- **Insecure Direct Object References:** Accessing another user's account by manipulating URLs or identifiers.

- **Privilege Escalation:** Attackers exploit vulnerabilities to gain higher privileges within the system.

**Common Types:**

- **Data Breaches:** Sensitive information exposed to unauthorized individuals.
- **System Disruptions:** Malicious actors disrupting critical operations.
- **Account Takeover:** Attackers hijacking user accounts for fraudulent activity.
- **Compliance Issues:** Violations of data protection regulations.

**The Fix:**

- **Implement Strong Authentication:** Enforce complex passwords, multi-factor authentication, and regular password changes.
- **Least Privilege:** Grant users only the minimum access permissions required for their tasks.
- **Regular Reviews:** Conduct periodic audits of access controls to identify and address weaknesses.
- **Secure Coding Practices:** Developers should follow secure coding guidelines to prevent access control vulnerabilities.
- **Input Validation:** Validate user input to prevent manipulation attempts.

```
 pstmt.setString(1, request.getParameter("acct"));
 ResultSet results = pstmt.executeQuery( );

 // https://example.com/app/accountInfo?acct=notmyacct

 https://example.com/app/getappInfo
 https://example.com/app/admin_getappInfo

```

## Security Misconfiguration

This document outlines Security Misconfiguration, a prevalent security threat lurking in improperly configured systems.

**The Threat:**

Security Misconfiguration arises when security settings on applications, devices, or cloud platforms are not set correctly. Imagine a high-security building with unlocked doors and disabled alarms – that's what a misconfigured system resembles.

**Common Types:**

- **Default Settings:** Leaving systems on insecure default configurations provided by the manufacturer. These defaults often prioritize ease of use over security.
- **Unnecessary Features:** Enabling functionalities or services not required for daily operations creates additional attack surfaces for malicious actors to exploit.
- **Weak Passwords:** Using weak or default passwords for administrative accounts is a major oversight, granting easy access to attackers.
- **Outdated Software:** Failing to update software with critical security patches leaves known vulnerabilities exposed for attackers to exploit.
- **Improper Access Controls:** Granting excessive permissions to users or not implementing access controls at all creates a chaotic environment where anyone can access sensitive data or perform unauthorized actions.
- **Unpatched Vulnerabilities:** Missing security patches for known vulnerabilities in software or firmware creates gaping holes in your system's defenses.

**The Fix:**

- **Implement Secure Defaults:** Configure systems with security-focused settings as the default option. This reduces the risk of human error and ensures a baseline level of security.

- **Principle of Least Privilege:** Grant users only the minimum access permissions they need to perform their tasks. This limits the potential damage if an account is compromised.

- **Regular Patch Management:** Apply security patches promptly to software and firmware to address vulnerabilities. Patching is an ongoing process, requiring consistent vigilance.
- **Strong Password Policies:** Enforce complex passwords, password rotation, and multi-factor authentication to make unauthorized access significantly more difficult.
- **Security Awareness Training:** Educate users on secure practices to identify and report potential misconfigurations. Empowering employees is crucial for a layered security approach.
- **Regular Security Audits:** Conduct periodic assessments to identify and rectify misconfigurations. Proactive identification and remediation is essential to maintaining a secure environment.

## Insecure Deserialization

Insecure Deserialization occurs when an application deserializes untrusted data without proper validation. Deserialization is the process of converting serialized data (often a byte stream) back into its original object form. Attackers can inject malicious code into this data, which then gets executed by the application upon deserialization. This is akin to a Trojan Horse – a seemingly harmless object that unleashes harm once inside.

**The Threat:**

- **Data Breaches:** Attackers can steal sensitive information like user data or financial records.
- **System Takeover:** In severe cases, attackers gain complete control of the system.
- **Denial-of-Service (DoS):** Malicious actors can crash the application or consume resources, making it unavailable.
- **Privilege Escalation & Lateral Movement:** Attackers can exploit the vulnerability to gain more privileges and move laterally within the network to compromise other systems.

**Common Types:**

- **Attacker Crafts Malicious Payload:** An attacker creates specially crafted serialized data containing malicious code.
- **Application Deserializes Data:** The vulnerable application receives the data and deserializes it.
- **Code Execution:** The malicious code embedded within the data is executed by the application, potentially leading to:
  - **Data Breaches:** Sensitive information like user data or financial records exposed.
  - **System Takeover:** Attackers gaining complete control of a system for malicious purposes.
  - **Denial-of-Service (DoS):** Systems rendered unavailable due to a flood of malicious traffic.

**Common Targets:**

Insecure deserialization vulnerabilities are often found in applications that:

- Accept user-controlled data (e.g., login forms, file uploads)
- Use libraries or frameworks that handle object serialization/deserialization

**The Fix:**

- **Validate and Sanitize User Input:** Thoroughly validate all user-controlled data before deserialization to remove any malicious code.
- **Use a Deserialization Library with Security Features:** Choose libraries that offer built-in security measures like whitelisting allowed classes or restricting object types during deserialization.
- **Keep Software Updated:** Regularly update frameworks, libraries, and application code to benefit from the latest security patches.
- **Consider Alternatives:** If possible, explore alternative approaches that don't involve deserialization of untrusted data.

## Using Components with Known Vulnerabilities

Modern applications rely on third-party components, libraries, and frameworks. While convenient, these components can harbor hidden dangers – unpatched vulnerabilities. Attackers exploit these weaknesses to launch attacks, potentially leading to:

**The Threat:**

- **Data Breaches:** Sensitive information like user data or financial records exposed.
- System Takeover: Attackers gain complete control of the system.
- **Denial-of-Service (DoS):** Applications become unavailable due to malicious attacks.

**Common Targets:**

Attackers target applications that use outdated or unpatched components with known vulnerabilities. These vulnerabilities can be found in various components, including:

- Open-source libraries
- Commercial frameworks
- Development tools

**The Fix:**

- **Maintain a Software Bill of Materials (SBOM):** Create a detailed list of all third-party components used in your application. This inventory helps identify vulnerable components.
- **Regular Vulnerability Scans:** Regularly scan your application and SBOM against vulnerability databases to identify known weaknesses.
- **Patch Management:** Prioritize and promptly apply security patches from component vendors to address vulnerabilities.
- **Stay Updated:** Subscribe to security advisories from component vendors and consider automated updates for critical components.
- **Consider Alternatives:** If a critical vulnerability exists and a patch is unavailable, explore alternative components with better security track records.

```
<sorted-set>
<string>foo</string>
  <dynamic-proxy>
    <interface>java.lang.Comparable</interface>
    <handler class='java.beans.EventHandler'>
      <target class='java.lang.ProcessBuilder'>
        <command>
          <string>touch</string><string>/tmp/here</string>
        </command>
      </target>
      <action>start</action>
    </handler>
  </dynamic-proxy>
</sorted-set>

```

## Insufficient Logging and Monitoring

This involves inadequate logging and monitoring capabilities, such as lack of logging, insufficient log retention, or failure to detect and respond to security incidents in a timely manner, leading to undetected attacks, data breaches, or prolonged compromises.

**The Threat:**

- **Delayed Detection:** Breaches go unnoticed for extended periods, allowing attackers to steal more data or cause greater damage.
- **Ineffective Response:** Lack of critical details hinders forensic analysis and makes incident response slow and inefficient.
- **Compliance Violations:** Organizations may fail to meet regulatory requirements for data security and audit trails.

**Common Types:**

Attackers particularly target systems with:

- **Limited Logging:** Systems that only log critical events or lack user activity logs make it difficult to detect unauthorized access or suspicious behavior.
- **No Security Alerts:** The absence of automated notifications for unusual activity allows attackers to operate under the radar for extended periods.
- **Fragmented Logs:** Logs scattered across different systems make it challenging to correlate events and identify attack patterns.

**The Fix:**

- **Log Essential Events:** Capture user logins, file access, application activity, and security-related events to reconstruct user actions and identify anomalies.
- **Enable Security Alerts:** Configure alerts for suspicious activity like failed login attempts, unauthorized access attempts, or unusual system behavior.
- **Centralized Log Management:** Aggregate logs from various sources (firewalls, servers, applications) into a central location for easier analysis and correlation of events.
- **Security Information and Event Management (SIEM):** Implement a SIEM solution to collect, analyze, and correlate security-related data from various sources in real-time, providing a holistic view of security posture.
- **Regular Review and Analysis:** Review logs regularly to identify suspicious activity and investigate potential security incidents promptly.

** Example Scenario:**

- **Case 1:** Insecure User Authentication Logging.
  In this scenario, an application fails to log failed login attempts or successful login events, making it difficult to detect brute-force attacks or unauthorized access attempts.

- **Case 2:** Insufficient Data Modification Logging .
  An application lacking proper logging mechanisms may fail to log critical actions such as data modification or deletion, making it challenging to identify and respond to unauthorized changes in the system.

---

\
\
.

This document provided a brief overview of several vulnerabilities included in the OWASP Top 10, a valuable resource for application security. By understanding these common threats and implementing the recommended mitigation strategies, developers can build more secure applications and organizations can create a stronger security posture.
\
\
Remember, security is an ongoing process, not a one-time fix. Regularly review your security practices, stay updated on the latest threats, and don't hesitate to seek help from security professionals when needed.

Here are some additional resources to keep you on your secure coding journey:

OWASP Top 10 Project Website: https://owasp.org/www-project-top-ten/ \
OWASP Cheat Sheet Series: https://cheatsheetseries.owasp.org/
By working together, we can create a safer digital world for everyone!
