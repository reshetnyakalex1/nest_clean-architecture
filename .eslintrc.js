module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir : __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'sequelizeMigrationsConfig.js', 'migrations/sequelize/*.js'],
    rules: {
        'prettier/indent': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'quotes': [2, "single", { "avoidEscape": true }],
        'indent': ["error", 4, {
            MemberExpression: 1,
            ignoredNodes: [
                'FunctionExpression > .params[decorators.length > 0]',
                'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
            ],
        },],
        "object-curly-spacing": [ "warn", "always" ],
        "no-return-await": 2,
        "max-len": [2, 120]
    },
};
