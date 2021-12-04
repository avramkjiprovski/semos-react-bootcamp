export const sayHello = () => {
    return {
        type: 'SAY_HELLO',
        payload: "Hi, welcome to my first redux app"
    }
}

export const sayGoodbye = () => {
    return {
        type: 'SAY_GOODBYE',
        payload: "Goodbye, see you later and thank for coming"
    }
}