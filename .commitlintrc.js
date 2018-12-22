module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      ['array', 'date', 'number', 'string', 'common'],
    ],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat', // === ADD
        'fix',
        'perf', // === IMPROVE
        'refactor',
        'revert',
        'test',
        'merge',
      ],
    ],
  },
};

// Examples:

// fix(chat): chat message component styles
// perf(common): webview styles
// merge(feature): feature/new_page
// test(user): userStore jest
// refactor(images): rename icon_dropdown_2.png -> icon_dropdown.png
// feat(ico): IcoProfile component
// docs(ico): IcoStore add comments
