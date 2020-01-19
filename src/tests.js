var VERSION_A, VERSION_Z;
var TEXT_MAJOR, TEXT_MINOR, TEXT_PATCH;

var LIST_A = [
				{major:3, minor:2, patch:1}, {major:3, minor:2, patch:1}, {major:3, minor:2, patch:1},
				{major:0, minor:1, patch:0}, {major:0, minor:1, patch:0}, {major:0, minor:1, patch:0},
				{major:1, minor:0, patch:0}, {major:1, minor:0, patch:0}, {major:1, minor:0, patch:0},
				{major:1, minor:0, patch:1}, {major:1, minor:1, patch:0},

				{major:2, minor:1, patch:0}, {major:2, minor:1, patch:3}, {major:2, minor:1, patch:3},
				{major:3, minor:0, patch:1}, {major:3, minor:0, patch:1}, {major:0, minor:1, patch:0},
				{major:1, minor:3, patch:0}, {major:1, minor:3, patch:1}
			];
var LIST_Z = [
				{major:3, minor:2, patch:0}, {major:3, minor:1, patch:1}, {major:2, minor:2, patch:1},
				{major:0, minor:1, patch:1}, {major:0, minor:2, patch:0}, {major:1, minor:0, patch:0},
				{major:1, minor:0, patch:1}, {major:1, minor:1, patch:0}, {major:2, minor:0, patch:0},
				{major:1, minor:0, patch:2}, {major:1, minor:2, patch:0},

				{major:2, minor:1, patch:3}, {major:2, minor:3, patch:0}, {major:2, minor:4, patch:0},
				{major:3, minor:0, patch:2}, {major:3, minor:2, patch:0}, {major:4, minor:2, patch:1},
				{major:1, minor:3, patch:1}, {major:1, minor:3, patch:2}
			];

var LIST = [
		[ // v0
			null, // m0
			[ null, update_generic_patch_ ], // m1
			[ update_generic_patch_ ] // m2
		],
		[ // v1
			[ update_generic_patch_, update_generic_patch_, update_generic_patch_ ], // m0
			[ update_generic_patch_, update_generic_patch_, update_generic_patch_ ], // m1
			[ update_generic_patch_, update_generic_patch_ ], // m2
			[ update_generic_patch_, update_generic_error_, update_generic_error_ ] // m3
		],
		[ // v2
			[ null ], // m0
			[ null, update_generic_patch_, , null ], // m1
			, // m2
			null, // m3
			[ ] // m4
		],
		[ // v3
			[ update_generic_patch_,  ],
		]
	];

/**
 *
 */
function trial_a() {
	var i;

	for (i = 0; i < LIST_A.length; i++) {
		console.log("test-" + i);
		VERSION_A = LIST_A[i];
		VERSION_Z = LIST_Z[i];
		update();
	}
}

/**
 *
 */
function trial_b() {
	var a = 16;

	console.log("test-" + a);
	VERSION_A = LIST_A[a];
	VERSION_Z = LIST_Z[a];
	update();
}
