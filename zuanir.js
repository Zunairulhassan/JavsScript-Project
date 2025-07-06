//sidebar
const manuItem = document.querySelectorAll('.manu-items');

//=====================masseges notification=====================
const massegesNotification = document.querySelector('#masseges-notification');
const massegeBox = document.querySelector('masseges');

// remonve active class from all manu items
const changeActiveItems = () =>{
    manuItem.forEach(item =>{
        item.classList.remove('active');
    })
}

manuItem.forEach(item => {
    item.addEventListener('click', () =>{
        changeActiveItems();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })
})


//-------------------------------massege manu-------------------------

// const massege = masseges.querySelectorAll('.masseges');

// // hightlight masseges card when manu item is lclicked
// massegesNotification.addEventListener('click', () => {
//     massegeBox.style.boxShadow = '0 0 2rem red';
//     massegesNotification.querySelector('.notification-count').style.display = 'none';
//     setTimeout(() => {
//         massege.style.boxShadow = 'none';
//     }, 2000);
// });


// const massegeSearch = document.querySelector('#massege-search');

//==============================masseges===============

// const searchMassege = () =>{
//     const val = massegeSearch.value.toLowerCase();
//     console.log(val);
//     massege.forEach(chat => {
//         let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
//         if(name.indexOf(val) != -1){
//             chat.style.display = 'flex';
//         }else {
//             chat.style.display = 'none';
//         }
//     })
// }



//-----------------------------theme------------------------------
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme'); 

//========================theme customize

//------open model
const openThemeModel = () =>{
    themeModel.style.display = 'grid';
}

//----------closing model----------------
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}
themeModel.addEventListener('click', closeThemeModel);
theme.addEventListener('click', openThemeModel);

//--------------font size customization---------------
const fontSizes = document.querySelectorAll('.choose-size span');

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active1');
    });
};

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        size.classList.add('active1');

        let fontSize;
        fontSizes.forEach(span => {
            span.classList.remove('active');
        });
        size.classList.add('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            size.style.setProperty('-----stickey-top-left', '5.4rem');
            size.style.setProperty('-----stickey-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            size.style.setProperty('-----stickey-top-left', '5.4rem');
            size.style.setProperty('-----stickey-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            size.style.setProperty('-----stickey-top-left', '-2rem');
            size.style.setProperty('-----stickey-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            size.style.setProperty('-----stickey-top-left', '-5rem');
            size.style.setProperty('-----stickey-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            size.style.setProperty('-----stickey-top-left', '-12rem');
            size.style.setProperty('-----stickey-top-right', '-35rem');
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    });
});



//-----------------color selection-----------------
const colorPalette = document.querySelectorAll('.choose-color span');

const removeActiveColorClass = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active2');
    });
};

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primeryHue;

        // Remove active class from all colors
        removeActiveColorClass();

        // Add active class to clicked one
        color.classList.add('active2');

        // Assign hue based on class
        if (color.classList.contains('color-1')) {
            primeryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primeryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primeryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primeryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primeryHue = 202;
        }

        // Update CSS variable
        document.documentElement.style.setProperty('--primery-color-hue', primeryHue);
    });
});

// ---------------------------color theme----------------------------------
const bgOptions = document.querySelectorAll('.choose-bg > div');

const changeBgActive = () => {
    bgOptions.forEach(option => option.classList.remove('active3'));
};

bgOptions.forEach(option => {
    option.addEventListener('click', () => {
        changeBgActive();
        option.classList.add('active3');

        if (option.classList.contains('bg-1')) {
            // Light Theme
            document.documentElement.style.setProperty('--color-white', 'hsl(252, 30%, 100%)');
            document.documentElement.style.setProperty('--color-light', 'hsl(252, 30%, 95%)');
            document.documentElement.style.setProperty('--color-dark', 'hsl(252, 30%, 17%)');
        } else if (option.classList.contains('bg-2')) {
            // Dim Theme
            document.documentElement.style.setProperty('--color-white', 'hsl(252, 30%, 25%)');
            document.documentElement.style.setProperty('--color-light', 'hsl(252, 30%, 20%)');
            document.documentElement.style.setProperty('--color-dark', 'hsl(252, 30%, 95%)');
        } else if (option.classList.contains('bg-3')) {
            // Lights Out Theme
            document.documentElement.style.setProperty('--color-white', 'hsl(252, 30%, 10%)');
            document.documentElement.style.setProperty('--color-light', 'hsl(252, 30%, 5%)');
            document.documentElement.style.setProperty('--color-dark', 'hsl(252, 30%, 95%)');
        }
    });
});
