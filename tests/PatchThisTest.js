const PatchThis = require('../src/PatchThis.js');

class PatchThisTest extends PatchThis {
  patchE_ () {
    throw new Error('This is an exception.');
  }

  patchF_ () {
    return 1;
  }

  patchS_ () {
    return 0;
  }
}

module.exports = PatchThisTest;
