export function getComponentSuggestions(query) {
  if (!query) return { components: [], codeSnippet: '' };

  const lower = query.toLowerCase();

  if (lower.includes('login')) {
    return {
      components: ['TextField', 'PasswordField', 'Button'],
      codeSnippet: `
import { TextField, Button } from '@visa/nova-react';

function LoginForm() {
  return (
    <form>
      <TextField label="Email" />
      <TextField label="Password" type="password" />
      <Button variant="primary">Login</Button>
    </form>
  );
}
      `.trim()
    };
  }

  // fallback example
  return {
    components: ['Card', 'Text', 'Button'],
    codeSnippet: `
import { Card, Text, Button } from '@visa/nova-react';

function Example() {
  return (
    <Card>
      <Text>This is a placeholder UI</Text>
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}
    `.trim()
  };
}
