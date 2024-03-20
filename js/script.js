// Utilizzando i dati forniti, 
// OK 1)creare un array di oggetti per rappresentare i membri del team. 
// OK 2)Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// OK MILESTONE 0:Creare l’array di oggetti con le informazioni fornite.
// OK MILESTONE 1:Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:Trasformare la stringa foto in una immagine effettiva
// BONUS 2:Organizzare i singoli membri in card/schede


const membersTeam = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg'
    }
    
]


for(let i = 0; i < membersTeam.length; i++) {
    const thisMember = membersTeam[i];
    // console.log(`${thisMember.name} ${thisMember.role} ${thisMember.img}`);
    for(let key in thisMember) {
    console.log(key + ': ' + thisMember[key]);
}
}