import {ref} from "vue"

const user = ref({nom: 'hery', email: "mail@hotmail.com"});

function fakeConnection(){
    console.log("aaaa")
}

function deconnexion(){
    console.log("bbbb")
}

export function useUserStore(){
    return {
        user,
        deconnexion,
        fakeConnection
    }
}

