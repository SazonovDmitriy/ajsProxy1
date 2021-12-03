export default function orderByProps(obj, sortDirection) {
    const propArray = Object.keys(obj)
    .filter(key => !sortDirection.includes(key))
    .sort()
    .map(key => Object.assign({}, {'key' : key, 'value' : obj[key]}))

    return Object.keys(obj)
    .filter(key => sortDirection.includes(key))
    .map(key => Object.assign({}, {'key' : key, 'value' : obj[key]}))
    .concat(propArray);
};