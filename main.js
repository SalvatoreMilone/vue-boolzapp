let app = new Vue({

	el: "#root",
	data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
            }],
            },

            {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },

            {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }],
            },

            {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
            }],
            },

            {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }],
            },

        ],

        selectedchat: "0",
        searchinput: "",
        messageinput:"",
        respond: "",
        
	},

	methods: {
        avatarpicker: function(index){  //restituisce l'avatar
            let temp = "img/"+ this.contacts[index].avatar +".png"
            return temp
        },
        selectchat: function(index){    //selezione della chat da visualizzare
            this.selectedchat = "";
            this.selectedchat = index
            console.log( index , this.contacts[index].name)
        },
        message: function(index){   //recived / sent   class
            if(this.contacts[this.selectedchat].messages[index].status == "received"){
                return "received"
            }else{
                return "sent"
            }
        },
        lastmessage: function(element, index){  //return last message
            let last = element.messages[element.messages.length - 1].text
            return last
        },
        search: function(element, index){   //contactlist search
            if(this.searchinput != "" && element.name.includes(this.searchinput)){
                return true
            }else if(this.searchinput == ""){
                return true
            }   
        },
        sendmessage: function(){
            
            this.contacts[this.selectedchat].messages.push({
                date: dayjs().format(),
                text: this.messageinput,
                status: 'sent'
            },)
            this.messageinput = "";

            temp = this.contacts[this.selectedchat];

            setTimeout(function(){
                temp.messages.push({
                    date: dayjs().format(),
                    text: "ok",
                    status: 'received'
                    },
                )
            },1000);

        },
        selectedchatfunc: function(element, index){
            if(this.selectedchat == index){
                return true
            }else{
                return false
            }
        }
    }
});
Vue.config.devtools = true
