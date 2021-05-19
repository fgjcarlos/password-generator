export const randomPosition = (option) => {
    return Math.floor(Math.random() * (option.length));
}

export const mixPassword = (password) => {
    const mixPassword = Array.from(password).sort(() => Math.random() - 0.5 );
    return mixPassword.join('');
}