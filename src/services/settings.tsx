export async function getCardsAmount() {
    const settingsFromBack = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/settings`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            Accept: 'application/json',
        },
    })
    if (settingsFromBack.status !== 200) return { error: 'Failed to get settings' };
    const content = await settingsFromBack.json();
    return content;
}