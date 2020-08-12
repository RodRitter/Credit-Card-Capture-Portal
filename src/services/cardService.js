export default class CardService {

    static Validate(number) {
        const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/g
        const patt = new RegExp(regex)
        return patt.test(String(number))
    }

    static GetBinInfo(number) {
        return new Promise((success, reject) => {
            fetch(`https://lookup.binlist.net/${number}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                success(json)
            })
            .catch(function(err) {
                reject(err)
            })
        })
    }

    static GetCountries() {
        return new Promise((success, reject) => {
            fetch('https://restcountries.eu/rest/v2/all')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                success(json)
            })
            .catch(function(err) {
                reject(err)
            })
        })
    }

    static SearchCountry(term) {
        return new Promise((success, reject) => {
            fetch(`https://restcountries.eu/rest/v2/name/${term}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                success(json)
            })
            .catch(function(err) {
                reject(err)
            })
        })
    }

}