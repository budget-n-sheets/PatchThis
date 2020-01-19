/**
 * Patch This: A basic patching system
 * Copyright (C) 2020 Guilherme T Maeoka
 * <https://github.com/guimspace/patch-this>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

function update() {
	var v0 = VERSION_A;
	const v1 = VERSION_Z;

	if (v0.major > v1.major) {
		console.log("v0.major > v1.major");
		return;
	}
	if (v0.major == v1.major) {
		if (v0.minor > v1.minor) {
			console.log("v0.minor > v1.minor");
			return;
		} else if (v0.minor == v1.minor && v0.patch >= v1.patch) {
			console.log("v0.minor == v1.minor && v0.patch >= v1.patch");
			return;
		}
	}

	console.log("update-start");

	var ver, major, minor, patch;
	var mm, pp, r, t;

	major = v0.major;
	minor = v0.minor;
	patch = v0.patch;
	list = LIST;

	t = 0;
	mm = minor;
	pp = patch;
	r = {r:0, m:minor, p:patch};

	do {
		TEXT_MAJOR = "v" + major;
		ver = (major == v1.major ? v1 : null);
		if (major >= list.length) {
			major -= 2;
			t = 1;
		} else if (list[major]) {
			r = update_major_(ver, list[major], minor, patch);
		}

		if (r.r || major == v1.major) {
			t = 1;
		} else {
			major++;
			mm = r.m;
			minor = 0;
			pp = r.p;
			patch = -1;
		}
	} while (!t);

	if (r.r) {
		if (r.m == -1) {
			major--;
			r.m = mm;
		}
		if (r.p == -1) r.p = pp;
	}

	v0 = {
		major: major,
		minor: r.m,
		patch: r.p
	};

	console.log(v0);
	console.log("update-end");
}
