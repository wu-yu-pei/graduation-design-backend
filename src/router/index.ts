import fs from 'fs';
import path from 'path';

export default function (app: any) {
  const files = fs.readdirSync(__dirname);

  files.forEach(async (routeItem: any, index: number) => {
    if (routeItem === 'index.ts') return;
    const route = await import(path.resolve(__dirname, `./${routeItem}`));

    app.use(route.default.routes());
  });
}
