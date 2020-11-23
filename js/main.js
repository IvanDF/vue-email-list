
const emailGenerator = new Vue ({
    el: '#email-generator',
    data: {
        emails: [],
        // while loop
            // numMax: 0,
    },
    computed: {

        emailsCreated() {
            return (this.emails.length < 10) ? false : true;
        }

    },  
    created(){

        this.generateEmailLoop();
    },
    
    methods: {
        generator() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( response => {
                    // handle success
                    this.emails.push(response.data.response)
                })
                .catch( error => {
                    // handle error
                    console.log(error);
                })
        },
        generateEmailLoop() { 
            // loop for             
            for (let i = 0; i < 10; i++) {
                this.generator()
            };

            // while loop
                // while (this.numMax < 10) {
                //     this.numMax ++
                //     this.generator()
                // };
        },
        generatorBtn() {
            this.emails = [];
            // while loop
                // this.numMax = 0;
            this.generateEmailLoop();
        },
    },
});