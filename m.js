const dictionary = {};

const elemenst_with_set = Array.from(document.getElementsByClassName('@set'));

elemenst_with_set.forEach(element => {
    const prop_name = element.classList[1]
    if(!prop_name) console.error('invalid prop name at', element.outerHTML);
    dictionary[prop_name] = {
        html: element.innerHTML,
        inputs: [...Array.from(element.classList).slice(2)]
    };
    element.remove()
})

console.log(dictionary);

const elemenst_with_get = Array.from(document.getElementsByClassName('@get'))

console.log(elemenst_with_get)

elemenst_with_get.forEach(element => {
    const prop_name = element.classList[1];
    const prop = dictionary[prop_name];
    element.innerHTML = prop.html;

    const input_array = Array.from(element.classList).slice(2)

    const inputs = {}
    input_array.forEach((input, index) => {
        inputs[prop.inputs[index]] = input
    })

    const elements_with_use = Array.from(element.getElementsByClassName('@use'))

    elements_with_use.forEach(element => {
        const prop_name = element.classList[1];
        element.innerHTML = inputs[prop_name] || ''
    })
    
})