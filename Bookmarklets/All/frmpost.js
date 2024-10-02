/**
 * Make all forms use POST.
 *
 * @title Form POST
 */
(function frmpost(document) {
	Array.prototype.slice.call(document.forms || document.getElementsByTagName('form')).forEach(function (form) {
		form.method = 'post';
		Array.prototype.slice.call(form.querySelectorAll('input[type="submit"], input[type="image"], button:not([type]), button[type="submit"]')).forEach(function (submit) {
			submit.parentNode.insertBefore(document.createTextNode(' [POST]'), submit.nextSibling);
		});
	});

	/* Recurse for frames and iframes. */
	try {
		Array.prototype.slice.call(document.querySelectorAll('frame, iframe, object[type^="text/html"], object[type^="application/xhtml+xml"]')).forEach(function (elem) {
			frmpost(elem.contentDocument);
		});
	} catch (e) {
		/* Catch exceptions for out-of-domain access, but do not do anything with them. */
	}
})(document);
