function update_generic_patch_() {
	try {
		// DO SOMETHING
	} catch (err) {
		console.error("update_generic_patch_()", err);
		return 1;
	}
}


function update_generic_error_() {
	try {
		// DO SOMETHING WITH ERROR
		return 1;
	} catch (err) {
		console.error("update_generic_error_()", err);
		return 1;
	}
}
