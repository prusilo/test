const showLoading = (control) => {
    if (control) {
        var loadingControl = document.createElement('<div>');
        loadingControl.id = 'login';
        loadingControl.className = 'login';
        control.appendChild(loadingControl);
    }
}

const hideLoading = (control) => {
    if (control) {
        var loadingControl = document.getElementById('login');

        if (loadingControl)
            control.removeChild(loadingControl);
    }
}