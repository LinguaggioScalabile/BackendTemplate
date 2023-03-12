export async function helloService() {
    return 'hello World!!'
}

export async function helloPostService(bodyProva: String) {
    const response = bodyProva + ' was written in the body!'
    return response
}
