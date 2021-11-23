export default function orderByProps(obj, sortDirection) {
    let propArray = [];
    for (const [key, value] of Object.entries(obj)) {
        const item = { key, value };
        propArray.push(item);
    }
    propArray.sort((a,b) => {
        if (a.key > b.key) {
            return 1;
        } else {
            return -1;
        };
    });
    for (let i = 0; i < sortDirection.length; i++) {
        let element = propArray.find(item => item.key === sortDirection[i]);
        const index = propArray.indexOf(element);
        propArray.splice(i, 0, propArray.splice(index, 1)[0]);
    }
    return propArray;
}