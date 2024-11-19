const app = Vue.createApp({
    data(){
        return{
            intro:'Hello World',
            books: [],
            newBook:{
                id: null,
                title: '',
                author: '',
                year: null,
                description: '',
            }
        }
    }, 
    methods: {
        getAll(){
            axios.get('http://localhost:5090/api/books')
            .then(response=>{
                
                this.books=response.data;
            })
            .catch(
                error=>{
                    console.log(error)
                }
            )

        },
    },
    computed:{
        myComputed(){
            return''
        },
    }


})