export const service = {
    get: function (url, params, header) {
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method: 'GET',
                headers: Headers
            }).then(response=>{
                if(response.ok){
                    return reponse.json()
                }else{
                    reject({
                        status: response.status
                    })
                }
            }).then(response=>{
                resolve(response)
            }).catch(err=>{
                reject({status:-1})
            })
        })
    }
}
