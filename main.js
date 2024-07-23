const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

const standartTheme = {
    '--background-color': 'rgb(219, 219, 219)',
    '--text-color': '#000',

    '--text-ul-li-a': '#000',
    '--button-ul-li-a': '#fff',

    '--div-conteudo': '#fff',
    '--shadow-div-conteudo': '4px 4px 12px #bcbcbc',

    '--color-text': '#000',

    '--color-hr': 'rgb(229, 231, 235)',

    '--background-button': '#e1e3df',

    '--background-redesocial':' #e9e9e9' 
}

const betterConstrastTheme = {
    '--background-color': 'rgb(45, 45, 45)',
    '--text-color': '#fff',

    '--text-ul-li-a': '#000',
    '--button-ul-li-a': '#fff',

    '--div-conteudo': '#000',
    '--shadow-div-conteudo': '0px 0px 0px #464545',

    '--color-text': '#fff',

    '--color-hr': 'rgb(148, 148, 148)',

    '--background-button': '#fff',

    '--background-redesocial':' #e9e9e9' 
}

inputContainer.addEventListener('change', function(){
    const betterContrastIsChecked = inputContainer.checked

    betterContrastIsChecked ? changeTheme(betterConstrastTheme) : changeTheme(standartTheme)
})

function changeTheme(theme){

    //console.log(theme)
    // for (let property in theme) {
    //     changeProperty(property, theme[property])
    // }

    //console.log(Object.entries(theme))

    for (let [property, value] of Object.entries(theme)){
        changeProperty(property, theme[property])
    }

}

function changeProperty(property, value){
    rootElement.style.setProperty(property, value)
}

