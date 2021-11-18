import orderByProps from "..proxy.js";

test('проверка обычной работы функции', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const args = ['name', 'level'];
    const received = sortedArray(obj, args);
    const expected = [
        { key: 'attack', value: 80 },
        { key: 'level', value: 2 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'name', value: 'мечник' },
    ];
    expect(received).toEqual(expected);
});