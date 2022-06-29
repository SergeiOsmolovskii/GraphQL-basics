import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modules = path.join(__dirname, 'modules');

export const typeDefsСollection = async () => {
  let data = [];
  const schemas = await fs.promises.readdir(modules, { withFileTypes: true });

  for (let item of schemas) {
    const file = path.join(modules, item.name, 'schemas', item.name + '.gql');
    const content = await fs.promises.readFile(file, 'utf8');
    data.push(content);
  }

  return data.join('\n');
}