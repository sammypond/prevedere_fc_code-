MktoForms2.loadForm("//app-ab15.marketo.com", "626-HMJ-058", 1504, function(form) {
//FormComplete code
window._zi = {formId: 'PW7iqPxdUjnd9BgLbAwT'};
var zi = document.createElement('script');
zi.type = 'text/javascript';
zi.async = true;
zi.src = 'https://ws-assets.zoominfo.com/formcomplete.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(zi, s); 
//end FC code
    form.onSuccess(function(values, followUpUrl) {
        // Take the lead to a different page on successful submit, ignoring the form's configured followUpUrl
        location.href = "    https://prevedere.com/insights/reports-and-downloads/american-workers-viewpoint-ty";
        // Return false to prevent the submission handler continuing with its own processing
        return false;
    });

});