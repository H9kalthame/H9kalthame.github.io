(() => {
  const replacements = new Map([
    ['A dedicated IT professional passionate about solving tech challenges, optimizing systems, and enhancing digital experiences.', 'IT professional with experience in technical support, IT operations, and service management, with a growing focus on network engineering.'],
    ['IT professional with experience in technical support and system troubleshooting, seeking to contribute my skills to enhance IT operations and provide effective solutions in a dynamic environment.', 'IT professional with hands-on experience in L2 support, IT operations, and service management. I enjoy troubleshooting technical issues and I am developing my networking skills as I work toward Network Engineering and senior IT Service Management roles.'],
    ['IT Support Specialist', 'IT Engineering Specialist'],
    ['Collaborate with the IT team to implement and support new software deployments and upgrades', 'Provide L2 support across clinics and pharmacies for hardware, software, network, and business application issues'],
    ['Provide training and support to end-users on new technologies and systems to enhance productivity', 'Support users and field IT teams remotely and on-site, and escalate complex incidents to the appropriate teams'],
    ['Monitored and resolved user tickets in Jira Service Management, ensuring timely issue resolution', 'Monitor and resolve incidents and service requests in Jira Service Management'],
    ['Monitor ticket resolution times to ensure compliance with Service Level Agreement (SLA)', 'Track ticket resolution times and SLA performance, and follow up on escalated incidents'],
    ['Manage and track IT inventory, ensuring proper allocation and maintenance of equipment', 'Work with tools including Nexthink, Entra ID, Intune, Active Directory, and Microsoft 365'],
    ['Documentation Skills', 'IT Service Management'],
    ['Process documentation', 'Incident and request management'],
    ['Troubleshooting guides', 'SLA monitoring'],
    ['User manuals', 'Escalation and follow-up'],
    ['Technical writing', 'Technical documentation'],
    ['TCP/IP protocols', 'TCP/IP and subnetting'],
    ['DNS configuration', 'DNS and DHCP'],
    ['DHCP management', 'VLAN and switching fundamentals'],
    ['VPN setup', 'Routing fundamentals'],
    ['© 2025 Hisham Alshehri. All rights reserved.', '© 2026 Hisham Alshehri. All rights reserved.']
  ]);

  function updateText() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const value = node.nodeValue.trim();
      if (replacements.has(value)) {
        const leading = node.nodeValue.match(/^\s*/)?.[0] || '';
        const trailing = node.nodeValue.match(/\s*$/)?.[0] || '';
        node.nodeValue = leading + replacements.get(value) + trailing;
      }
    }
  }

  const observer = new MutationObserver(updateText);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', updateText);
  setTimeout(updateText, 500);
})();
