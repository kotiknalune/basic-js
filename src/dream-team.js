module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        let secretName = '';

        for (let i = 0; i < members.length; i++) {

            if (typeof members[i] == 'string') {
                members[i] = members[i].trim();
                let firstLetter = members[i].charAt(0);
                secretName += firstLetter;

            }
        }
        secretName = secretName.toUpperCase().split("").sort().join("");

        return secretName;
    } else {
        return false;
    }
};