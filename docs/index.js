const vm = new Vue({
    el: '#app',
    data: {
        st: 'Source',
        tt: ''
    },
    methods: {
        async submitSource() {
            const self = this
            console.log(`submit: ${self.st}`)
            console.log(JSON.stringify(self.st))
            fetch('https://sheepy-meme.builtwithdark.com/mock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                mode: 'cors',
                body: JSON.stringify(self.st)
            }).then(res => {
                if (res.status === 200) {
                    res.text().then(t => {
                        self.tt = `${t}: ${self.st}`
                    })
                }
            })
        }
    },
})