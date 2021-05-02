module.exports = {
<<<<<<< HEAD
=======
    extends: [
        // 'stylelint-config-recommended'
    ],
>>>>>>> f21efaf182f445fe5128fe9078fc213fe9eb841e
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen'
                ]
            }
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null
    }
};
