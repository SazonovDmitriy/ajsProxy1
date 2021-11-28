export default function orderByProps(obj, sortDirection) {
    let propArray = [];
    for (const key in obj) {
        propArray.push(key);
    };

    const arrResult = [];

    function sortArr (array) {
        return array.sort((a,b) => b - a); // Через что сортировать?
    };

    for (let i = 0; i < propArray.length; i += 1) {
        const k = propArray[i];
    }
    

    return arrResult;
}