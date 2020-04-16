module.exports = class Warn {

    static parse (message) {
        if (this.match(message)) {
            this.action(message)
            return (true)
        }
        return (false)
    }

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

    static parse (message) {
        if (this.match(message)) {
            this.action(message)
            return (true)
        }
        return (false)
    }

    static match (message) {
        return message.content.startsWith('.clear')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        let number = argv[0]
        message.delete()
        if (number == null) {
            message.channel.send ({embed: {
                color: 10038562,
                description: ':negative_squared_cross_mark: **| Please specify a number !**'
            }})
            return
        } else if (number.) {
            message.channel.send ({embed: {
                color: 3066993,
                description: ':white_check_mark: **| ' + number + ' message(s) ' +
                'a/ont bien été supprimé(s) !**'
            }})
        }
    }
}