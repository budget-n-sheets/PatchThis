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

function update_minor_(v1, list, patch) {
	var p = patch;
	var ver, r;

	r = 0;

	if (v1) ver = v1;
	else ver = {patch:-100};

	do {
		p++;
		TEXT_PATCH = "." + p;
		if (p >= list.length) {
			p--;
			break;
		} else if (list[p]) {
			r = list[p]();
		}
	} while (!r && p != ver.patch);

	if (r) p--;

	return {r:r, p:p};
}
