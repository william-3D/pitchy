module.exports = {
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    printWidth: 100,
    jsxSingleQuote: true,
    bracketSpacing: true,
    arrowParens: 'avoid',
    endOfLine: 'lf',
    quoteProps: 'as-needed',
    embeddedLanguageFormatting: 'auto',
    htmlWhitespaceSensitivity: 'css',
    overrides: [
        {
            files: '*.json',
            options: {
                parser: 'json',
            },
        },
    ],
};
