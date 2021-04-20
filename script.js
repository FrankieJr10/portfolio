//Geting a value from local storage
let theme = localStorage.getItem('theme');
if (theme = null){
    setTheme('light')
}
else{
    setTheme(theme)
}

//init themes dot
let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        
        setTheme(mode);
    })
}

// funtion to set theme
function setTheme(mode) {
    if (mode == 'light'){
        document.getElementById('theme-style').href = 'styles.css'
    }

    if (mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    //To set a value to local storage
    localStorage.setItem('theme', mode)
}