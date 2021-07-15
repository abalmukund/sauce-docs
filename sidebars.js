module.exports = {
    apif: [
        {
            type: 'category',
            label: 'Quick Start',
            collapsed: true,
            items: [
                'apif/quick-start',
                'apif/quick-start/composer',
                'apif/quick-start/build-from-spec',
                'apif/quick-start/test-reports',
                'apif/quick-start/schedule-a-test',
                'apif/quick-start/dashboard',
            ],
        },
    ],
    dev: [
        'dev',
        {
            type: 'category',
            label: 'API Reference',
            collapsed: true,
            items: [
                'dev/api',
                'dev/api/accounts',
                'dev/api/connect',
                'dev/api/insights',
                'dev/api/jobs',
                'dev/api/performance',
                'dev/api/platform',
                'dev/api/rdc',
                'dev/api/storage',
            ],
        },
        {
            type: 'category',
            label: 'CLI Reference',
            collapsed: true,
            items: [
                'dev/cli',
                'dev/cli/sauce-connect-proxy',
                {
                    type: 'category',
                    label: 'Virtual USB',
                    collapsed: true,
                    items: [
                        'dev/cli/virtual-usb',
                        'dev/cli/virtual-usb/start-server',
                        'dev/cli/virtual-usb/start-session',
                        'dev/cli/virtual-usb/connect-session',
                        'dev/cli/virtual-usb/disconnect-session',
                        'dev/cli/virtual-usb/delete-session',
                        'dev/cli/virtual-usb/find-sessionid',
                    ],
                },
                {
                    type: 'link',
                    label: 'saucectl CLI', // The label that should be displayed (string).
                    href: '/testrunner-toolkit/saucectl' // The target URL (string).
                },
            ],
        },
    ],
    docs: {
        "Home": [
            'overview',
            {
                type: 'category',
                label: 'Sauce Labs Basics',
                collapsed: true,
                items: [
                    'sauce-basics',
                    'basics/platform-configurator',
                    'basics/environment-variables',

                    {
                        type: 'category',
                        label: 'Account and Team Management',
                        collapsed: true,
                        items: [
                            'basics/acct-team-mgmt-hub',
                            'basics/acct-team-mgmt/org-settings',
                            'basics/acct-team-mgmt/real-devices',

                            {
                                type: 'category',
                                label: 'Managing Users and Accounts',
                                collapsed: true,
                                items: [
                                    'basics/acct-team-mgmt/concurrency-limits',
                                    'basics/acct-team-mgmt/adding-deactivating-users',
                                    'basics/acct-team-mgmt/managing-user-info',
                                    'basics/acct-team-mgmt/viewing-exporting-usage-data',
                                ],
                            },
                            {
                                type: 'category',
                                label: 'Managing Teams',
                                collapsed: true,
                                items: [
                                    'basics/acct-team-mgmt/adding-deleting-teams',
                                    'basics/acct-team-mgmt/assigning-removing-users-teams',
                                    'basics/acct-team-mgmt/sauce-connect-proxy-tunnels',
                                ],
                            },
                            {
                                type: 'category',
                                label: 'Billing and Subscriptions',
                                collapsed: true,
                                items: [
                                    'basics/acct-team-mgmt/managing-subscription',
                                    'basics/acct-team-mgmt/updating-billing',
                                    'basics/acct-team-mgmt/plan-details',
                                ],
                            },
                        ],
                    },

                    {
                        type: 'category',
                        label: 'Single Sign-On',
                        collapsed: true,
                        items: [
                            'basics/sso-hub',
                            'basics/sso/setting-up-single-sign-on',
                            'basics/sso/config-adfs',
                            'basics/sso/config-okta',

                        ],
                    },
                    {
                        type: 'category',
                        label: 'Test Configuration and Annotation',
                        collapsed: true,
                        items: [
                            'basics/test-config-annotation/test-config',
                            'basics/test-config-annotation/test-annotation',

                        ],
                    },
                    {
                        type: 'category',
                        label: 'Data Center Endpoints',
                        collapsed: true,
                        items: [
                            'basics/data-center-endpoints/data-center-endpoints',
                            'basics/data-center-endpoints/aust-early-access',

                        ],
                    },
                    {
                        type: 'category',
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                            'basics/integrations/deque',
                            'basics/integrations/jira',
                        ],
                    },
                ],
            },
        ],
        "Sauce Trusted Connection": [
            'secure-connections',
            {
                type: 'category',
                label: 'Sauce Connect Proxy',
                collapsed: true,
                items: [
                    'secure-connections/sauce-connect',
                    'secure-connections/sauce-connect/system-requirements',
                    'secure-connections/sauce-connect/installation',

                    {
                        type: 'category',
                        label: 'Setup and Configuration',
                        collapsed: true,
                        items: [
                            'secure-connections/sauce-connect/setup-configuration/setup-configuration',
                            'secure-connections/sauce-connect/setup-configuration/basic-setup',
                            'secure-connections/sauce-connect/setup-configuration/additional-proxies',
                            'secure-connections/sauce-connect/setup-configuration/high-availability',
                            'secure-connections/sauce-connect/setup-configuration/specialized-environments',
                            'secure-connections/sauce-connect/setup-configuration/ci-cd-environments',
                        ]
                    },
                    'secure-connections/sauce-connect/environment-variables',
                    'secure-connections/sauce-connect/proxy-tunnels',
                    'secure-connections/sauce-connect/security-authentication',
                    'secure-connections/sauce-connect/troubleshooting',
                    'secure-connections/sauce-connect/faq',
                    'secure-connections/sauce-connect/changelog',
                ],
            },
            'secure-connections/ipsec-vpn',
        ],


        "Mobile Apps": [
            'mobile-apps',
            'mobile-apps/supported-devices',
            'mobile-apps/app-storage',
            {
                type: 'category',
                label: 'Live Testing',
                collapsed: true,
                items: [
                    'mobile-apps/live-testing/live-mobile-app-testing',
                ],
            },

            {
                type: 'category',
                label: 'Automated Testing',
                collapsed: true,
                items: [
                    'mobile-apps/automated-testing',
                    {
                        type: 'category',
                        label: 'Appium',
                        collapsed: true,
                        items: [
                            'mobile-apps/automated-testing/appium',
                            'mobile-apps/automated-testing/appium/real-devices',
                            'mobile-apps/automated-testing/appium/virtual-devices',
                            'mobile-apps/automated-testing/appium/migration',
                        ],
                    },
                    {
                        type: 'category',
                        label: 'Espresso and XCUITest',
                        collapsed: true,
                        items: [
                            'mobile-apps/automated-testing/espresso-xcuitest',
                            'testrunner-toolkit/configuration/espresso',
                            'testrunner-toolkit/configuration/xcuitest',
                        ],
                    },
                    'mobile-apps/automated-testing/ipa-files',
                ],
            },
            'mobile-apps/features',
            'mobile-apps/virtual-usb',
            'mobile-apps/ms-app-center',
            'mobile-apps/faq',
        ],
        "Web Apps": [
            'web-apps',
            {
                type: 'category',
                label: 'Live Testing',
                collapsed: true,
                items: [
                    'web-apps/live-testing/live-cross-browser-testing',
                ],
            },
            {
                type: 'category',
                label: 'Automated Testing',
                collapsed: true,
                items: [{
                    type: 'category',
                    label: 'Selenium',
                    collapsed: true,
                    items: [
                        'web-apps/automated-testing/selenium',
                        'web-apps/automated-testing/selenium/pre-run-executables',
                        'web-apps/automated-testing/selenium/sample-scripts',
                    ]
                },
                    {
                        type: 'category',
                        label: 'Cypress',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/cypress',
                            'testrunner-toolkit/configuration/cypress',
                        ]
                    },
                    {
                        type: 'category',
                        label: 'Playwright',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/playwright',
                            'testrunner-toolkit/configuration/playwright',
                        ],
                    },
                    {
                        type: 'category',
                        label: 'TestCafe',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/testcafe',
                            'testrunner-toolkit/configuration/testcafe',
                        ]
                    },
                    {
                        type: 'category',
                        label: 'Puppeteer',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/puppeteer',
                            'testrunner-toolkit/configuration/puppeteer',
                        ],
                    },
                ],
            },
        ],
        "API Testing": [
            'api-testing',
            {
                type: 'category',
                label: 'Quick Start',
                collapsed: true,
                items: [
                    'api-testing/quick-start',
                    'api-testing/quick-start/composer',
                    'api-testing/quick-start/build-from-spec',
                    'api-testing/quick-start/test-reports',
                    'api-testing/quick-start/schedule-a-test',
                    'api-testing/quick-start/dashboard',
                    'api-testing/quick-start/integrate-with-your-cicd',
                    'api-testing/quick-start/introduction-to-integration-testing',
                    'api-testing/quick-start/adding-a-user',
                    'api-testing/quick-start/flexible-variables-for-flexible-environments',
                    'api-testing/quick-start/environments-vault-and-overrides-magic',
                    'api-testing/quick-start/setup-connectors',
                    'api-testing/quick-start/the-vault',
                    'api-testing/quick-start/importing-postman-collections',
                    'api-testing/quick-start/load-testing',
                    'api-testing/quick-start/mocking-services',
                    'api-testing/quick-start/easy-monitoring',
                    'api-testing/quick-start/forge',
                ],
            },
            {
                type: 'category',
                label: 'APIs and Webhooks',
                collapsed: true,
                items: [
                    'api-testing/api/v3',
                    'api-testing/api/using-the-api',
                ],
            },
            {
                type: 'category',
                label: 'Assertion Components',
                collapsed: true,
                items: [
                    'api-testing/assertion-components/assert-compares',
                    'api-testing/assertion-components/assert-contains',
                    'api-testing/assertion-components/assert-equals',
                    'api-testing/assertion-components/assert-exists',
                    'api-testing/assertion-components/assert-greater',
                    'api-testing/assertion-components/assert-in',
                    'api-testing/assertion-components/assert-is',
                    'api-testing/assertion-components/assert-less',
                    'api-testing/assertion-components/assert-matches',
                    'api-testing/assertion-components/assert-valid-json-schema',
                ],
            },
            {
                type: 'category',
                label: 'Bloodhound',
                collapsed: true,
                items: [
                    'api-testing/bloodhound',
                    'api-testing/bloodhound/basic-configuration',
                    'api-testing/bloodhound/flows',
                    'api-testing/bloodhound/base-actors',
                    'api-testing/bloodhound/load-balancing',
                    'api-testing/bloodhound/fine-tuning',
                    'api-testing/bloodhound/advanced-actors',
                    {
                        type: 'category',
                        label: 'Module Actors',
                        collapsed: true,
                        items: [
                            'api-testing/bloodhound/module-actors',
                            'api-testing/bloodhound/module-actors/jdbc',
                            'api-testing/bloodhound/module-actors/mongodb',
                            'api-testing/bloodhound/module-actors/rabbitmq',
                            'api-testing/bloodhound/module-actors/fortress-forwarder',
                        ],
                    },
                    'api-testing/bloodhound/expressions',
                    'api-testing/bloodhound/forward-calls-to-apif-logger',
                    'api-testing/bloodhound/using-databases',
                ],
            },
            {
                type: 'category',
                label: 'CI/CD',
                collapsed: true,
                items: [
                    'api-testing/ci/apif-auto',
                    'api-testing/ci/azure-devops',
                    'api-testing/ci/connecting-with-bamboo',
                    'api-testing/ci/bitbucket',
                    'api-testing/ci/gitlab',
                    {
                        type: 'category',
                        label: 'Jenkins',
                        collapsed: true,
                        items: [
                            'api-testing/ci/jenkins/using-the-api',
                            'api-testing/ci/jenkins/apif-auto',
                            'api-testing/ci/jenkins/apif-auto-and-github',
                            'api-testing/ci/jenkins/zephyr-enterprise-integration',
                        ],
                    },
                    'api-testing/ci/micro-focus-alm-integration',
                ],
            },
            {
                type: 'category',
                label: 'How To Guides',
                collapsed: true,
                items: [
                    'api-testing/how-to/assertions-for-metrics-performance',
                    'api-testing/how-to/3-leg-oauth',
                    'api-testing/how-to/integration-testing',
                    'api-testing/how-to/copy-a-test',
                    'api-testing/how-to/authorization-simple-oauth-etc',
                    'api-testing/how-to/different-ways-to-compose-a-request-body',
                    'api-testing/how-to/disable-ssl-validation',
                    'api-testing/how-to/dynamic-dates',
                    'api-testing/how-to/tweaking-stateful-email-notifications',
                    'api-testing/how-to/executing-from-cucumber',
                    'api-testing/how-to/following-redirects',
                    'api-testing/how-to/footprint',
                    'api-testing/how-to/generate-a-status-page',
                    'api-testing/how-to/generating-fake-test-data',
                    'api-testing/how-to/github-for-datasets',
                    'api-testing/how-to/create-a-dynamic-header',
                    'api-testing/how-to/import-export-tests',
                    'api-testing/how-to/kv',
                    'api-testing/how-to/keystores-for-downloader',
                    'api-testing/how-to/load-agent-deployment',
                    'api-testing/how-to/setup-notifications-performance-alerts',
                    'api-testing/how-to/testing-graphql',
                    'api-testing/how-to/update-input',
                    'api-testing/how-to/using-long-lasting-tokens',
                    'api-testing/how-to/version-control',
                    'api-testing/how-to/writing-tests-in-code',
                ],
            },
            {
                type: 'category',
                label: 'I/O Components',
                collapsed: true,
                items: [
                    'api-testing/io-components',
                    'api-testing/io-components/jdbc',
                    'api-testing/io-components/multipart-upload',
                    'api-testing/how-to/update-input',
                ],
            },
            {
                type: 'category',
                label: 'Integrations',
                collapsed: true,
                items: [
                    'api-testing/integrations/add-new-connector',
                    'api-testing/integrations/alerts-thresholds-using-json-connector',
                    'api-testing/ci/connecting-with-bamboo',
                    {
                        type: 'category',
                        label: 'Connectors',
                        collapsed: true,
                        items: [
                            'api-testing/integrations/connectors/bigpanda-io',
                            'api-testing/integrations/connectors/datadog',
                            'api-testing/integrations/connectors/elastic-kibana',
                            'api-testing/integrations/connectors/jira',
                            'api-testing/integrations/connectors/pagerduty',
                            'api-testing/integrations/connectors/statuspage',
                            'api-testing/integrations/connectors/twilio',
                            'api-testing/integrations/connectors/xmatters',
                            'api-testing/integrations/connectors/splunk',
                        ],
                    },
                    'api-testing/integrations/helper-databases-jdbc',
                    'api-testing/integrations/jenkins',
                    'api-testing/integrations/single-sign-on-with-saml-2-0-beta',
                ],
            },
            {
                type: 'category',
                label: 'Learn More',
                collapsed: true,
                items: [
                    'api-testing/learn-more/downloader-101',
                    'api-testing/learn-more/improving-your-metrics',
                    'api-testing/learn-more/input-set-and-global-variables',
                    'api-testing/learn-more/planning-your-test',
                    'api-testing/learn-more/the-variables-system-in-api-fortress',
                    'api-testing/learn-more/working-with-the-response-object',
                    'api-testing/learn-more/the-working-copy-published-tests',

                ],
            },
            {
                type: 'category',
                label: 'Logical Components',
                collapsed: true,
                items: [
                    'api-testing/logical-components/each',
                    'api-testing/logical-components/flow',
                    'api-testing/logical-components/if',
                    'api-testing/logical-components/tag',
                    'api-testing/logical-components/while',
                ],
            },
            {
                type: 'category',
                label: 'Mocking / Service Virtualization',
                collapsed: true,
                items: [
                    'api-testing/mocking/expressions-in-mocked-apis',
                    'api-testing/mocking/mock-recording-with-kong',
                ],
            },
            {
                type: 'category',
                label: 'Monitoring',
                collapsed: true,
                items: [
                    'api-testing/how-to/generate-a-status-page',
                    'api-testing/how-to/setup-notifications-performance-alerts',
                ],
            },
            {
                type: 'category',
                label: 'Postman',
                collapsed: true,
                items: [
                    'api-testing/postman/build-from-collections',
                ],
            },
            {
                type: 'category',
                label: 'Product Information',
                collapsed: true,
                items: [
                    'api-testing/product-information/api-tests-vs-schema-validation',
                    'api-testing/product-information/cloud-vs-on-premises-local',
                ],
            },
            {
                type: 'category',
                label: 'Reference',
                collapsed: true,
                items: [
                    'api-testing/assertion-components/assert-compares',
                    'api-testing/assertion-components/assert-contains',
                    'api-testing/assertion-components/assert-equals',
                    'api-testing/assertion-components/assert-exists',
                    'api-testing/assertion-components/assert-greater',
                    'api-testing/assertion-components/assert-in',
                    'api-testing/assertion-components/assert-is',
                    'api-testing/assertion-components/assert-less',
                    'api-testing/assertion-components/assert-matches',
                    'api-testing/reference/comment',
                    'api-testing/reference/company-settings',
                    'api-testing/reference/composer-snippets',
                    'api-testing/reference/connecting-to-testrail',
                    'api-testing/reference/execution-context-in-api-fortress',
                    'api-testing/reference/expression',
                    'api-testing/reference/expression-language-extensions',
                    'api-testing/logical-components/flow',
                    'api-testing/reference/generating-a-jwt',
                    'api-testing/reference/github',
                    'api-testing/logical-components/if',
                    'api-testing/bloodhound/module-actors/jdbc',
                    'api-testing/how-to/kv',
                    'api-testing/reference/read-file',
                    'api-testing/logical-components/tag',
                    'api-testing/logical-components/while',
                ],
            },
            {
                type: 'category',
                label: 'Security Testing',
                collapsed: true,
                items: [
                    'api-testing/security-testing/example-security-tests',
                ],
            },
            {
                type: 'category',
                label: 'Self Hosted',
                collapsed: true,
                items: [{
                    type: 'category',
                    label: 'The Self Hosted Platform',
                    collapsed: true,
                    items: [
                        'api-testing/self-hosted/on-prem-platform',
                        'api-testing/self-hosted/on-premises-requirements',
                        'api-testing/self-hosted/updating-an-on-premises-instance',
                        'api-testing/self-hosted/on-premises-backing-up-your-data',
                    ],
                },
                    {
                        type: 'category',
                        label: 'Other Platforms',
                        collapsed: true,
                        items: [
                            'api-testing/self-hosted/deployment-docker',
                            'api-testing/self-hosted/deployment-kubernetes',
                            'api-testing/self-hosted/red-hat-openshift',
                        ],
                    },
                    'api-testing/self-hosted/best-practices-for-disaster-recovery',
                    'api-testing/self-hosted/certificate-based-mutual-ssl-tls-authentication',
                    'api-testing/self-hosted/deployment-configure-the-dns-for-the-mocking-service',
                    'api-testing/learn-more/downloader-101',
                    'api-testing/self-hosted/enabling-api-fortress-to-read-local-files',
                    'api-testing/how-to/load-agent-deployment',
                    'api-testing/self-hosted/local-downloader-setup',
                    'api-testing/self-hosted/multiple-client-cert-downloader',
                    'api-testing/self-hosted/proxy-settings-in-downloader',
                    'api-testing/self-hosted/updating-the-api-fortress-license-key',
                    'api-testing/self-hosted/using-rds-and-documentdb',
                ],
            },
        ],
        "CI/CD": [
            'ci',
            'ci/bamboo',
            'ci/bitbucket',
            'ci/jenkins',
            'ci/teamcity',
        ],
        "Test Results": [
            'test-results',
            'test-results/viewing-test-results',
            'test-results/managing-test-results',
            'test-results/sharing-test-results',
            'test-results/archived-test-results',
            'test-results/test-status',
            'test-results/badges-browser-matrix',
        ],
        "Insights": [
            'insights',
            'insights/scope',
            'insights/history',
            'insights/trends',
            'insights/failure-analysis',
            'insights/debug',
        ],
        "Performance": [
            'performance',
            'performance/about',
            'performance/one-page',
            'performance/transitions',
            'performance/motion',
            'performance/analyze',
        ],
        "Headless": [
            'headless',
        ],
        "saucectl": [
            'testrunner-toolkit',
            'testrunner-toolkit/installation',
            'testrunner-toolkit/configuration',
            'testrunner-toolkit/running-tests',
            {
                type: 'category',
                label: 'CI Integrations',
                collapsed: true,
                items: [
                    'testrunner-toolkit/integrations',
                    'testrunner-toolkit/integrations/circleci',
                    'testrunner-toolkit/integrations/jenkins',
                    'testrunner-toolkit/integrations/github-actions',
                    'testrunner-toolkit/integrations/gitlab',
                ],
            },
            'testrunner-toolkit/typescript',
            'testrunner-toolkit/saucectl',
        ],
        "Visual": [
            'visual',
            {
                type: 'category',
                label: 'E2E Testing',
                collapsed: true,
                items: [
                    'visual/e2e-testing/setup',
                    'visual/e2e-testing/dashboard-workflow',
                    {
                        type: 'category',
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                            'visual/e2e-testing/integrations/continuous-integration',
                            'visual/e2e-testing/integrations/selenium-webdriver',
                            'visual/e2e-testing/integrations/github',
                            'visual/e2e-testing/integrations/webhooks',
                            'visual/e2e-testing/integrations/sauce-labs',
                        ],
                    },
                    'visual/e2e-testing/screener-recorder',
                    'visual/e2e-testing/api',
                    'visual/e2e-testing/secure-connections',
                    'visual/e2e-testing/notifications',
                    'visual/e2e-testing/acct-team-mgmt',
                ],
            },
            {
                type: 'category',
                label: 'Component Testing',
                collapsed: true,
                items: [
                    'visual/component-testing/setup',
                    'visual/component-testing/dashboard-workflow',
                    {
                        type: 'category',
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                            'visual/component-testing/integrations/continuous-integration',
                            'visual/component-testing/integrations/github',
                            'visual/component-testing/integrations/webhooks',
                            'visual/component-testing/integrations/slack',
                            'visual/component-testing/integrations/visual-studio',
                            'visual/component-testing/integrations/sauce-labs',
                        ],
                    },
                    'visual/component-testing/cross-browser-testing',
                    'visual/component-testing/testing-interactions',
                    'visual/component-testing/notifications',
                    'visual/component-testing/acct-team-mgmt',
                ],
            },
        ],
        "Reference": [
            'dev/glossary',
            'dev/error-messages',
            'dev/test-configuration-options',
            'dev/w3c-webdriver-capabilities',
            'dev/data-center-maint',
        ],
        Contributing: [
            'contributing',
            'contributing/code-of-conduct',
            {
                type: 'category',
                label: 'Style Guide',
                items: [
                    'contributing/style-guide',
                    'contributing/style-guide/mkdwn-styles',
                    'contributing/style-guide/adv-examples'
                ],
            },
        ],
    },
};