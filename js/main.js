const app = Vue.createApp({
    data(){
        return{
            intro:'Hello World',
            books: [],
            newBook:{
                Title: '',
                Author: '',
                Year: null,
                Description: '',
            }
        }
    }, 
    methods: {
        getAll(){
            axios.get('http://localhost:5090/api/Books')
            .then(response=>{
                document.getElementById("content")
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