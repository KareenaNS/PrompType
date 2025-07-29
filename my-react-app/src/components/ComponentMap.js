export function getComponentSuggestions(query) {
  if (!query) return { components: [], codeSnippet: '' };

  const lower = query.toLowerCase();

    const vpdsComponents = {
    Button: {
      name: 'Button',
      description: 'Triggers an action or event.',
      code: `<Button variant="primary">Click Me</Button>`,
      color: '#c5eff7',
    },
    Input: {
      name: 'Input',
      description: 'Captures user input in a form field.',
      code: `<Input label="Your input" />`,
      color: '#fde3a7',
    },
    Checkbox: {
      name: 'Checkbox',
      description: 'Binary toggle for options like "Remember Me".',
      code: `<Checkbox label="Remember me" />`,
      color: '#d5f4e6',
    },
    Card: {
      name: 'Card',
      description: 'Container with border and padding.',
      code: `<Card><Text>Content inside a card</Text></Card>`,
      color: '#f7cac9',
    },
    Text: {
      name: 'Text',
      description: 'Displays plain text content.',
      code: `<Text>This is some text</Text>`,
      color: '#f5f5f5',
    },
    BarChart: {
      name: 'BarChart',
      description: 'Displays a bar chart of data.',
      code: `<BarChart data={data} />`,
      color: '#d6eaf8',
    },
    LineChart: {
      name: 'LineChart',
      description: 'Displays a line graph of trends.',
      code: `<LineChart data={data} />`,
      color: '#d1f2eb',
    },
    PieChart: {
      name: 'PieChart',
      description: 'Displays data as pie slices.',
      code: `<PieChart data={data} />`,
      color: '#f9e79f',
    }
  };

  let selectedComps = [];
  if (lower.includes('login') || lower.includes('form')) {
    selectedComps = ['Input', 'Checkbox', 'Button'];
  } else if (lower.includes('chart') || lower.includes('graph')) {
    selectedComps = ['BarChart', 'LineChart', 'PieChart'];
  } else {
    selectedComps = ['Card', 'Text', 'Button'];
  }
  const components = selectedComps.map((name) => vpdsComponents[name]);
const importNames = selectedComps.join(", ");
const componentTags = selectedComps.map(name => {
  if (name === 'BarChart' || name === 'LineChart' || name === 'PieChart') {
    return `      <${name} data={data} />`;
  }
  if (name === 'Input') {
    return `      <Input label="Your input" />`;
  }
  if (name === 'Checkbox') {
    return `      <Checkbox label="Remember me" />`;
  }
  if (name === 'Button') {
    return `      <Button variant="primary">Click Me</Button>`;
  }
  if (name === 'Card') {
    return `      <Card><Text>Content inside a card</Text></Card>`;
  }
  if (name === 'Text') {
    return `      <Text>This is some text</Text>`;
  }
  return `      <${name} />`;
}).join('\n');

const dataDeclaration = (selectedComps.some(c => ['BarChart','LineChart','PieChart'].includes(c))) ?
  `const data = [{ label: 'A', value: 30 }, { label: 'B', value: 70 }];\n\n` : '';

const codeSnippet = `
import { ${importNames} } from '@visa/nova-react';

function Example() {
  ${dataDeclaration}return (
    <div>
${componentTags}
    </div>
  );
}
`.trim();
  return { components, codeSnippet };

}
