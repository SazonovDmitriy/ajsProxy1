import orderByProps from "../proxyOne";

test('seatch', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const args = ['name', 'level'];
    const received = orderByProps(obj, args);
    const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }
    ];
    expect(received).toEqual(expected);
});s