module.exports = class Warn {
    static match (message) {
        return message.content.startsWith('.warn')
    }
    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        let member = argv[0]
        let motif = argv[1]
        let mention = message.mentions.users.first();

        if (mention == null) { return }
        message.delete()
        let mentionMessage = message.content.slice (5)
        mention.send ({embed: {
            color: 3066993,
            description: ':warning: **AVERTISSEMENT** - Tu as reçu un' +
            ' avertissement dans le serveur **Projets** avec\n' +
            'comme raison : ' + motif + '!'
        }})
        message.channel.send ({embed: {
            color: 3066993,
            description: ':white_check_mark: **| L\'avertissement a bien été ajouté pour '
            + member + ' pour la raison : ' + motif + '**'
        }})
    }
}

module.exports = class Clear {
    static match (message) {
        return message.content.startsWith('.clear')
    }
    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        let number = argv[0]

        for (let i = 0; i < number; i++) {
            message.delete()
        }
        message.channel.send ({embed: {
            color: 3066993,
            description: ':white_check_mark: **| ' + number + ' message(s) ' +
            'a/ont bien été supprimé(s) !**' }})
    }
}