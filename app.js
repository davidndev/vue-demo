Vue.component('spa-navbar', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Verify Phone</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/about">About</a>
        </div>
        </div>
    </nav>
    `,
    mounted() {
        console.log(this.$children);
    }
});

new Vue({
    el: '#app',

    data: {
        inputPhone: '',
        validPhoneFormat: true,
        verifyResponse: {}
    },

    computed:{

    },

    methods: {
        onSubmit() {
            axios.get('http://apilayer.net/api/validate?access_key=5fb8d7edf739df2123de74b1da398128&number=1' + this.inputPhone)
                .then(response => (this.verifyResponse = response.data));
        },
        validPhone() {
            var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

            if (this.inputPhone.match(phoneNum))
            {
                this.validPhoneFormat = true;
            }
            else {
                this.validPhoneFormat = false;
            }
            this.verifyResponse = {};
        }
    }
});