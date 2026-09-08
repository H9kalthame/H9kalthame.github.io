(() => {
  const replacements = new Map([
    ['A dedicated IT professional passionate about solving tech challenges, optimizing systems, and enhancing digital experiences.', 'IT professional with experience in technical support, IT operations, and service management, with a strong interest in network engineering.'],
    ['IT professional with experience in technical support and system troubleshooting, seeking to contribute my skills to enhance IT operations and provide effective solutions in a dynamic environment.', 'I work in L2 IT support and IT operations, handling technical issues, tickets, escalations, and day-to-day support across clinics and pharmacies. I am building my networking skills while also developing toward senior roles in IT Service Management.'],
    ['Jeddah, Saudi Arabia', 'Saudi Arabia'],
    ['95%', '90%'],
    ['IT Support Specialist', 'IT Engineering Specialist'],
    ['Collaborate with the IT team to implement and support new software deployments and upgrades', 'Provide L2 support across clinics and pharmacies for hardware, software, network, and business application issues'],
    ['Provide training and support to end-users on new technologies and systems to enhance productivity', 'Support users and field IT teams remotely and on-site, and escalate complex incidents when needed'],
    ['Monitored and resolved user tickets in Jira Service Management, ensuring timely issue resolution', 'Monitor and resolve incidents and service requests in Jira Service Management'],
    ['Monitor ticket resolution times to ensure compliance with Service Level Agreement (SLA)', 'Track ticket resolution times, SLA performance, and escalated incidents'],
    ['Manage and track IT inventory, ensuring proper allocation and maintenance of equipment', 'Work with Nexthink, Entra ID, Intune, Active Directory, Microsoft 365, and IT asset operations'],
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

  function fixGraduationProjectStyle() {
    const headings = [...document.querySelectorAll('h4')];
    const heading = headings.find(el => el.textContent.trim() === 'Graduation Project:');
    if (!heading || !heading.parentElement) return;

    const box = heading.parentElement;
    box.classList.remove('bg-blue-50', 'dark:bg-blue-900/20');
    box.style.backgroundColor = 'transparent';
  }

  function applyUpdates() {
    updateText();
    fixGraduationProjectStyle();
  }

  const observer = new MutationObserver(applyUpdates);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', applyUpdates);
  setTimeout(applyUpdates, 100);
  setTimeout(applyUpdates, 500);
  setTimeout(() => observer.disconnect(), 3000);
})();
