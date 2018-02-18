/* eslint-disable no-useless-escape */
module.exports = projectPath => {
  const cwd = process.cwd()

  const basePath = `${projectPath}/{{ directoryBase }}/{{ componentType }}s/{{ pascalCase name }}`

  return {
    name: 'Component',
    generator: {
      description: 'Create pages or dumb components',
      prompts: [
        {
          type: 'list',
          name: 'componentType',
          choices: ['component', 'page'],
          message: 'What type of component is this?',
          default: 'component',
          basePath: projectPath
        },
        {
          type: 'input',
          name: 'name',
          message:
            'What should it be called? (you can add a path here like `dir/ExampleButton`)',
          default: 'ExampleButton'
        }
      ],
      actions: [
        {
          type: 'add',
          path: `${basePath}/{{ name }}.tsx`,
          templateFile: `${cwd}/generators/templates/component.template.hbs`,
          abortOnFail: true
        },
        {
          type: 'add',
          path: `${basePath}/{{ name }}.test.tsx`,
          templateFile: `${cwd}/generators/templates/component.test.template.hbs`,
          abortOnFail: true
        },
        {
          type: 'add',
          path: `${basePath}/index.ts`,
          templateFile: `${cwd}/generators/templates/index.template.hbs`,
          abortOnFail: true
        },
        {
          type: 'add',
          path: `${basePath}/style.js`,
          templateFile: `${cwd}/generators/templates/style.template.hbs`,
          abortOnFail: true
        }
      ]
    }
  }
}
