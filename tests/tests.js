const PatchThisTest = require('./PatchThisTest.js');

function main () {
  const tests = [
    {
      v0: { major: 0, minor: 0, patch: 0, beta: 0 },
      vA: { major: 0, minor: 0, patch: 1, beta: 0 },
      list: [
        [
          ['', '']
        ]
      ]
    },
    {
      v0: { major: 0, minor: 1, patch: 0, beta: 0 },
      vA: { major: 0, minor: 1, patch: 1, beta: 0 },
      list: [
        [
          ['', ''],
          ['', '']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 0, beta: 0 },
      vA: { major: 1, minor: 0, patch: 1, beta: 0 },
      list: [
        [
          ['', ''],
          ['', '']
        ],
        [
          ['', ''],
          ['', '']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 1, patch: 0, beta: 0 },
      vA: { major: 1, minor: 1, patch: 1, beta: 0 },
      list: [
        [
          ['', ''],
          ['', '']
        ],
        [
          ['', ''],
          ['', '']
        ]
      ]
    },
    {
      v0: { major: 0, minor: 1, patch: 0, beta: 0 },
      vA: { major: 1, minor: 0, patch: 1, beta: 0 },
      list: [
        [
          ['', ''],
          ['', '']
        ],
        [
          ['', ''],
          ['', '']
        ]
      ]
    },
    {
      v0: { major: 0, minor: 1, patch: 0, beta: 0 },
      vA: { major: 1, minor: 1, patch: 1, beta: 0 },
      list: [
        [
          ['', ''],
          ['', '']
        ],
        [
          ['', ''],
          ['', '']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 0, beta: 0 },
      vA: { major: 1, minor: 0, patch: 1, beta: 0 },
      list: [
        [],
        [
          ['', 'patchF_']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 0, beta: 0 },
      vA: { major: 1, minor: 1, patch: 0, beta: 0 },
      list: [
        [],
        [
          [''],
          ['patchF_']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 0, beta: 0 },
      vA: { major: 2, minor: 0, patch: 0, beta: 0 },
      list: [
        [],
        [
          ['']
        ],
        [
          ['patchF_']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 0, beta: 0 },
      vA: { major: 1, minor: 0, patch: 2, beta: 0 },
      list: [
        [],
        [
          ['', '', 'patchF_']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 0, beta: 0 },
      vA: { major: 1, minor: 1, patch: 1, beta: 0 },
      list: [
        [],
        [
          ['', ''],
          ['', 'patchF_']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 0, beta: 0 },
      vA: { major: 2, minor: 0, patch: 1, beta: 0 },
      list: [
        [],
        [
          ['', ''],
          ['', '']
        ],
        [
          ['', 'patchF_']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 0, beta: 0 },
      vA: { major: 1, minor: 1, patch: 1, beta: 0 },
      list: [
        [],
        [
          ['', '', '']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 2, beta: 0 },
      vA: { major: 1, minor: 1, patch: 1, beta: 0 },
      list: [
        [],
        [
          ['', '', '']
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 1, beta: 0 },
      vA: { major: 2, minor: 1, patch: 2, beta: 0 },
      list: [
        [],
        [
          ['', ''],
          ['', '', '', ''],
          [''],
          []
        ]
      ]
    },
    {
      v0: { major: 1, minor: 0, patch: 1, beta: 0 },
      vA: { major: 2, minor: 1, patch: 2, beta: 0 },
      list: [
        [],
        [
          ['', '']
        ],
        []
      ]
    },
    {
      v0: { major: 0, minor: 1, patch: 0, beta: 0 },
      vA: { major: 2, minor: 3, patch: 4, beta: 0 },
      list: [
        [
          ['', '', '', '', '', '', '']
        ],
        [
          ['', ''],
          ['', '', '', '', ''],
          ['']
        ],
        [
          ['', ''],
          ['', '', ''],
          [''],
          ['', '', '', '', '']
        ]
      ]
    }
  ];

  for (const test of tests) {
    const r = new PatchThisTest(test.v0, test.vA, test.list);
    console.log(test.v0);
    r.update();
    console.log(r.getPosition());
    console.log(test.vA);
    console.log(r.response);
    console.log('');
  }
}

main();
