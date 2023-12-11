function validateNickName(nickName) {

    if (nickName.length === 0 || nickName.length > 12 || containsEmoji(nickName)) {
        return false;
    }
    return true;
}

function containsEmoji(input) {
    // Regular expression to match emojis
    const emojiPattern = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}]/gu;
    if(emojiPattern.test(input)) {
        return true;
    }
    return false;
}
module.exports = {
    validateNickName
};