module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        let acronym = '';

        for (let i = 0; i < members.length; i++) {

            if (typeof members[i] == 'string') {
                members[i] = members[i].trim();
                let firstLetter = members[i].charAt(0);
                acronym += firstLetter;

            }
        }
        acronym = acronym.toUpperCase().split("").sort().join("");

        return acronym;
    } else {
        return false;
    }
};