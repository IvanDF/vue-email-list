
const emailGenerator = new Vue ({
    el: '#email-generator',
    data: {
        emails: [], 
    },
    compute: {
        

    },
    created(){

            
        for (let i = 0; i < 10; i++) {
            this.generator()
        }
    },
    
    methods: {
        generator() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( response => {
                    // handle success
                    console.log(response.data.response);
                        this.emails.push(response.data.response)
                    console.log(this.emails)
                })
                .catch( error => {
                    // handle error
                    console.log(error);
                })
        }
    },
});