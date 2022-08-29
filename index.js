document.addEventListener('click', function (event) {
	if (event.target.matches('.custom-control-label')) {
        let switchVal = this.getElementById("switchVal").innerText;
        if (switchVal === "Today") {
            this.getElementById("switchVal").innerText = "Upcoming";
        } else {
            this.getElementById("switchVal").innerText = "Today";
        }
    }
    for (let i = 0; i < event.target.classList.length; i++) {
        if (event.target.classList[i] === 'fa-bell') {
            event.target.classList.remove('fa-bell');
            event.target.classList.add('fa-bell-slash')
        } else if (event.target.classList[i] === 'fa-bell-slash') {
            event.target.classList.remove('fa-bell-slash');
            event.target.classList.add('fa-bell')
        }
    }
}, false);