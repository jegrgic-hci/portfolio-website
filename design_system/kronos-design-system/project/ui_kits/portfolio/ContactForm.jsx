/* Contact form — name / email / message with mock submit */

const ContactForm = () => {
  const [name, setName]       = React.useState('');
  const [email, setEmail]     = React.useState('');
  const [message, setMessage] = React.useState('');
  const [ack, setAck]         = React.useState(false);
  const [submitting, setSub]  = React.useState(false);
  const [done, setDone]       = React.useState(false);
  const [touched, setTouched] = React.useState(false);

  const emailError = touched && email && !/^\S+@\S+\.\S+$/.test(email);

  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!name || !email || !message || !ack || emailError) return;
    setSub(true);
    setTimeout(() => { setSub(false); setDone(true); }, 900);
  };

  React.useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setDone(false), 3200);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <div>
      <SectionHeader title="Open Channel" />
      <form className="k-contact" onSubmit={submit} noValidate>
        <FormField label="Name">
          <Input placeholder="Operator name..." value={name} onChange={e => setName(e.target.value)} />
        </FormField>
        <FormField label="Email" error={emailError ? 'Invalid format — use name@domain.com' : undefined}>
          <Input placeholder="name@domain.com" value={email} onChange={e => setEmail(e.target.value)} onBlur={() => setTouched(true)} error={emailError} />
        </FormField>
        <FormField label="Message" helper="Plain text. No attachments at this protocol level.">
          <Textarea placeholder="Describe the brief..." value={message} onChange={e => setMessage(e.target.value)} />
        </FormField>
        <div className="k-formfield full">
          <Checkbox checked={ack} onChange={setAck}>Acknowledge Protocol — response within 2 business days</Checkbox>
        </div>
        <div className="k-submit-row">
          <span className="k-helper">All fields required · Build 4.0.0</span>
          <Button variant="primary" type="submit" loading={submitting} iconAfter={submitting ? undefined : "arrow"}>
            {submitting ? 'Transmitting' : 'Send Message'}
          </Button>
        </div>
      </form>
      {done && (
        <div className="k-toast">
          <Icon name="check" size={14} /> Message received · Confirmation sent
        </div>
      )}
    </div>
  );
};

window.ContactForm = ContactForm;
