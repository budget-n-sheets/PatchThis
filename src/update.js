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

function update () {
  const v0 = VERSION_A;
  const v1 = VERSION_Z;

  if (v0.major > v1.major) return;
  if (v0.major === v1.major) {
    if (v0.minor > v1.minor) return;
    if (v0.minor === v1.minor) {
      if (v0.patch > v1.patch) return;
      if (v0.patch === v1.patch) {
        if (BETA_LIST.length === 0 || v0.beta >= BETA_LIST.length) return;
      }
    }
  }

  const beta = v0.beta;
  const patch_list = PATCH_LIST;

  let major = v0.major;
  let minor = v0.minor;
  let patch = v0.patch;

  let t = 0;
  let mm = minor;
  let pp = patch;
  let r = { r: 0, m: minor, p: patch, b: beta };

  do {
    let ver = (major === v1.major ? v1 : null);
    if (major >= patch_list.length) {
      major -= 2;
      t = 1;
    } else if (patch_list[major]) {
      r = update_major_(ver, patch_list[major], minor, patch, beta);
    }

    if (r.r || major === v1.major) {
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
    if (r.m === -1) {
      major--;
      r.m = mm;
    }
    if (r.p === -1) r.p = pp;
  } else if (r.m === -1) {
    r.m = 0;
  }

  const new_v0 = {
    major: major,
    minor: r.m,
    patch: r.p,
    beta: r.b
  };

  VERSION_A = new_v0;
}
