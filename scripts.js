// Elements
const display = document.querySelector('.display')
const inputer = document.querySelector('.inputer')
const form = document.querySelector('.form')
// Functions

const sentencePlaceholder = '"The sidewalk was the color of the elevator."'
display.textContent = sentencePlaceholder


const american = {
    'colour': 'color',
    'pavement': 'sidewalk',
    'lift': 'elevator',
    'lorry': 'truck',
    'autumn': 'fall',
    'biscuit': 'cookie',
    'bonnet': 'hood',
    'boot': 'trunk',
    'chips': 'fries',
    'crisps': 'chips',
    'holiday': 'vacation',
    'maths': 'math',
    'favourite': 'favorite',
    'recognise': 'recognize',
    'nappy': 'diaper',
    'naughts and crosses': 'tick-tack-toe',
    'trousers': 'pants',
    'pants': 'underwear',
    'pub': 'bar',
    'sweets': 'candy',
    'waistcoat': 'vest'
}

function capitaliseFirst(str) {
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('')
}

function replaceAmerican(e) {
    e.preventDefault()
    console.log(e)
    let str = inputer.value.toLowerCase()
    let new_str = str;
    console.log(new_str)
    for (let key in american) {
        if (!american.hasOwnProperty(key)) {
            continue;
        }

        new_str = new_str.replace(new RegExp(key, "g"), american[key]);

    }

    console.log(new_str)
    display.textContent = '"' + capitaliseFirst(new_str) + '"'
    //return new_str
}

form.addEventListener('submit', replaceAmerican)