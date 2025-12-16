const termsNavItems = [
  { id: 'terms-overview', label: 'Services Overview' },
  { id: 'terms-eligibility', label: 'User Eligibility' },
  { id: 'terms-fees', label: 'Fees and Charges' },
  { id: 'terms-security', label: 'Security and Liability' },
  { id: 'terms-termination', label: 'Termination' },
  { id: 'terms-ip', label: 'Intellectual Property' },
  { id: 'terms-changes', label: 'Changes to Terms' },
  { id: 'terms-disputes', label: 'Dispute Resolution' },
  { id: 'terms-law', label: 'Governing Law' },
];

const privacyNavItems = [
  { id: 'privacy-collection', label: 'Information Collection' },
  { id: 'privacy-usage', label: 'How We Use Data' },
  { id: 'privacy-sharing', label: 'Sharing Information' },
  { id: 'privacy-security', label: 'Data Security' },
  { id: 'privacy-rights', label: 'Your Rights' },
  { id: 'privacy-children', label: "Children's Privacy" },
  { id: 'privacy-cookies', label: 'Cookies and Tracking' },
  { id: 'privacy-changes', label: 'Policy Changes' },
  { id: 'privacy-contact', label: 'Contact Us' },
];

const Sidebar = ({ activeTab }) => {
  const navItems = activeTab === 'terms' ? termsNavItems : privacyNavItems;

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="sticky top-30  mb-6 h-fit bg-[#28937F] rounded-xl p-6 shadow-soft">
      <h3 className="text-base font-bold mb-4 text-[#fff]">Quick Navigation</h3>
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="text-[#fff] text-sm transition-all duration-300 hover:text-primary hover:pl-2 block py-1"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;