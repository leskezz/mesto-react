class Api {
    constructor ({baseUrl, headers}){
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _getResponseData (url, {headers, method, body}) {
        return fetch(url, {headers, method, body})
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        }
                        return Promise.reject(new Error(`Ошибка: ${res.status}`));
                    })
    }

    getUserData (userUrl) {
        return this._getResponseData(`${this._baseUrl}${userUrl}`, {
            headers: this._headers
        })
    }       
    

    getInitialCards (cardsUrl) {
        return this._getResponseData(`${this._baseUrl}${cardsUrl}`, {
            headers: this._headers
        })
    }

    patchProfile (userUrl, newData) {
        return this._getResponseData(`${this._baseUrl}${userUrl}`, {
            method: 'PATCH',
            headers: this._headers, 
            body: JSON.stringify({
                name: newData.name,
                about: newData.about
            })
        })

    }

    postNewCard (cardsUrl, newCard) {
        return this._getResponseData(`${this._baseUrl}${cardsUrl}`, {
            method: 'POST',
            headers: this._headers, 
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link
            })
        })

    }

    changeLikeCardStatus(likesUrl, cardId, isLiked) {
        if (!isLiked) {
            return this._getResponseData(`${this._baseUrl}${likesUrl}/${cardId}`, {
                method: 'PUT',
                headers: this._headers 
            })
        } else {
            return this._getResponseData(`${this._baseUrl}${likesUrl}/${cardId}`, {
                method: 'DELETE',
                headers: this._headers 
            })
        }
    }

    deleteCard (cardsUrl, cardToDelete) {
        return this._getResponseData(`${this._baseUrl}${cardsUrl}/${cardToDelete._id}`, {
            method: 'DELETE',
            headers: this._headers 
        })
    }

    patchAvatar(avatarUrl, newAvatar){
        return this._getResponseData(`${this._baseUrl}${avatarUrl}`, {
            method: 'PATCH',
            headers: this._headers, 
            body: JSON.stringify({
                avatar: newAvatar.avatar
            })
        })
    }

}

const api = new Api ({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
    headers: {
        authorization: 'b9ca3f7b-fe22-468a-8861-4b4eef5a6009',
        'Content-Type': 'application/json'
    },
})

export default api;
