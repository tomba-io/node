const Service = require('../service.js');
const TombaException = require('../exception.js');

class Finder extends Service {

    /**
     * Email Finder
     *
     * generates or retrieves the most likely email address from a domain name, a
     * first name and a last name.
     *
     * @param {string} domain
     * @param {string} firstName
     * @param {string} lastName
     * @throws {TombaException}
     * @returns {Promise}
     */
    async emailFinder(domain, firstName, lastName) {
        if (typeof domain === 'undefined') {
            throw new TombaException('Missing required parameter: "domain"');
        }

        if (typeof firstName === 'undefined') {
            throw new TombaException('Missing required parameter: "firstName"');
        }

        if (typeof lastName === 'undefined') {
            throw new TombaException('Missing required parameter: "lastName"');
        }

        let path = '/email-finder/{domain}'.replace('{domain}', domain);
        let payload = {};

        if (typeof firstName !== 'undefined') {
            payload['first_name'] = firstName;
        }

        if (typeof lastName !== 'undefined') {
            payload['last_name'] = lastName;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Finder;