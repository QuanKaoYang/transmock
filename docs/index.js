const vm = new Vue({
    el: '#app',
    data: {
        st: 'Source',
        tt: ''
    },
    methods: {
        async submitSource() {
            const self = this
            // Your server endpoint.
            // The method can use 'GET'/'POST'/'PUT etc.
            // 'mode: cors' is unnecessary if the hosting page and the endpoint are
            //  on the same server.
            fetch('https://sheepy-meme.builtwithdark.com/mock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                mode: 'cors',
                body: JSON.stringify(self.st)
            }).then(res => {
                if (res.status === 200) {
                    // or res.json() to use a JSON response
                    res.text().then(t => {
                        self.tt = `${t}: ${self.st}`
                    })
                }
            })
        }
    },
})