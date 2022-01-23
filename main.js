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

        selectedchat: 0,
        searchinput: "",
        messageinput:"",
        respond: "",
        
	},

	methods: {
        avatarpicker: function(index){  //restituisce l'avatar
            let avatar = "img/"+ this.contacts[index].avatar +".png"
            return avatar
        },
        currentchatavatar: function(){ //mostra l'avatar della persona con cui si sta chattando
            let avatar = "img/"+ this.contacts[this.selectedchat].avatar +".png"
            return avatar
        },
        selectchat: function(index){    //selezione della chat da visualizzare
            this.selectedchat = "";
            this.selectedchat = index
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
        lastmesdate: function(element, index){
            let last = element.messages[element.messages.length - 1].date
            return last
        },
        search: function(element, index){   //contactlist search
            if(this.searchinput != "" && element.name.toLowerCase().includes(this.searchinput)){
                return true
            }else if(this.searchinput == ""){
                return true
            }   
        },
        sendmessage: function(){
            
            if (this.messageinput.trim()===''){
                this.messageinput = "";
                return
            }
            
            this.contacts[this.selectedchat].messages.push({
                date: dayjs().format('MM/DD/YY H:mm'),
                text: this.messageinput,
                status: 'sent'
            },)
            this.messageinput = "";

            temp = this.contacts[this.selectedchat];

            setTimeout(function(){
                temp.messages.push({
                    date: dayjs().format('MM/DD/YY H:mm'),
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
        },
        currentchatusername: function(){
            let username = this.contacts[this.selectedchat].name
            return username
        },
        deletemess: function(element, index){
            let thismessage = this.contacts[this.selectedchat].messages
            thismessage.splice(index,1)
        },
        trim: function(){
            if (!('trim' in String.prototype)) {
                String.prototype.trim= function() {
                    return this.replace(/^\s+/, '').replace(/\s+$/, '');
                };
            }
        }
    }
});
Vue.config.devtools = true
