// Filter uitsluitend deze cursus. Gedeelde bronbestanden blijven ongewijzigd.
// Een verdwenen sectie stopt de build, zodat de selectie opnieuw nagekeken wordt.
function omitSections(content: string, titles: string[]): string {
  const found = new Set<string>();
  let fence = '';
  let omittedLevel = 0;
  const result: string[] = [];
  for (const line of content.split('\n')) {
    const marker = line.match(/^\s*(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1][0];
      else if (marker[1][0] === fence) fence = '';
    }
    const heading = !fence && !marker ? line.match(/^(#{1,6})\s+(.+?)\s*$/) : null;
    if (heading) {
      const level = heading[1].length;
      if (omittedLevel && level <= omittedLevel) omittedLevel = 0;
      if (titles.includes(heading[2])) {
        found.add(heading[2]);
        omittedLevel = level;
      }
    }
    if (!omittedLevel) result.push(line);
  }
  for (const title of titles) {
    if (!found.has(title)) throw new Error(`Cursusfilter: sectie "${title}" ontbreekt in de monorepo.`);
  }
  return result.join('\n');
}

export function courseContent({filePath, fileContent}: {filePath: string; fileContent: string}): string {
  const file = filePath.replaceAll('\\', '/').split('/docs/').pop();
  let content = fileContent;
  if (file === 'nodejs-+-typescript/projectmaken.md') {
    content = omitSections(content, ['create-clean-node']);
  }
  if (file === 'nodejs-+-typescript/type-systeem/basic-types.md') {
    content = omitSections(content, ['Unknown', 'Test je kennis']);
    content = content.replace(/^import Quiz from .*;\s*$/m, '');
  }
  if (file === 'nodejs-+-typescript/type-systeem/interfaces.md') {
    content = omitSections(content, ['Record type', 'Het `as` keyword', 'Test je kennis']);
    content = content.replace(/^import Quiz from .*;\s*$/m, '');
  }
  if (file === 'nodejs-+-typescript/asynchroon-programmeren/fetch.md') {
    content = omitSections(content, ['Testen', 'Interactieve demo']);
  }
  if (file === 'mysql/crud-api.md') {
    content = omitSections(content, ['Een planeet wijzigen', 'De planeet wijzigen']);
    content = content.replace('# CRUD met API-endpoints', '# API-endpoints met MySQL')
      .replace('CRUD staat voor Create, Read, Update en Delete. We breiden de planeten-applicatie uit zodat we planeten kunnen toevoegen, bekijken, wijzigen en verwijderen.',
        'We breiden de planeten-applicatie uit zodat we planeten kunnen toevoegen, bekijken en verwijderen.')
      .replace(/^\| PATCH.*\n/gm, '')
      .replace(', updatePlanet', '')
      .replace('Vergeet bij UPDATE en DELETE', 'Vergeet bij DELETE')
      .replace('wijzigen of verwijderen.', 'verwijderen.')
      .replace('GET, PATCH of DELETE', 'GET of DELETE');
  }
  if (file === 'mysql/gebruik-in-express.md') {
    content = content.replace(' Meer uitleg vind je bij [omgevingsvariabelen](../security/environment-variables.md).', '');
  }
  return content.replace('[CRUD-endpoints]', '[API-endpoints]').replace('[bestaande CRUD-API]', '[bestaande API]');
}
