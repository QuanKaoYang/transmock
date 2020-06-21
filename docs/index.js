const getTrans = (text) => {
    return new Promise(resolve => {
        fetch('https://sheepy-meme.builtwithdark.com/mock', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin':'*'
            },
            mode: 'cors',
            body: text
        }).then(res => {
            if (res.statsu === 200) {
                res.text().then(t => {
                    resolve('translated')
                })
            }
        })
    })
}

async function submit2() {
    console.log('here')
    return new Promise((resolve, reject) => {
        fetch(`https://sheepy-meme.builtwithdark.com/meebaalogin`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'text/plain',
                },
            mode: 'cors',
            body: 'hoge',
        }).then(res => {
            if (res.status === 200) {
                res.text().then(t => {
                    resolve(t);
                })
            } else {
                reject("Login Failed");
            }
        }).catch(() => {
            reject("Login Failed")
        })
    })
}
const vm = new Vue({
    el: '#app',
    data: {
        st: 'Source',
        tt: ''
    },
    methods: {
        async submitSource() {
            console.log(`submit: ${this.st}`)
            this.tt = await getTrans(this.st)
        }
    },
})