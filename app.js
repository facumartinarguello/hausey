 
        
    // hauseyhealth stack Mern + DialogFlow by Facundo Martin Arguello

//const op = require('./operaciones');
const mongoose = require('mongoose');
const express = require('express');
const server = express();
const dfff = require ('dialogflow-fulfillment');

//conexion dialogflow e intents
    server.post ('/', express.json(), (req, res)=> {
        const agent = new dfff.WebhookClient({
            request : req,
            response : res
        });

        function demo (agent){
            agent.add('A fim de ajudá-lo, faremos algumas perguntas. Se você concordar, escreva a palavra "concordo".');
        }
    // TEST DE NUEVA FUNCION

    function pq1name (agent){
        agent.add("Por favor, digite seu primeiro nome");
    }

    function pq2name (agent){
        agent.add("Por favor, digite seu email");
    }

    function pq3name (agent){
        agent.add("Por favor, digite seu primeiro cpf");
    }

    //funciones de cuestionario

    function fq1 (agent){
        agent.add("Algumas pessoas que estão com o humor alterado podem sentir-se tristes, sem esperanças, solitários e inúteis. Se você tem sentido o seu humor alterado, como se sente na última semana? \n0 - não me sinto com o humor alterado, estou normal. \n 1 - sim, um pouco pior do que o normal. \n2 - sim, pior do que o normal. \n3 - sim, muito pior do que o normal\n 4 - sim, péssimo, nunca estive tão mal. ");
    }
    // segunda

    function fq2 (agent){
        agent.add("Algumas pessoas podem se sentir mal com pensamentos de que fez coisas erradas e que decepcionou alguém. Isso tem acontecido com você? Como é? \n0 - não tenho esse sentimento. \n 1 - sim, sinto que decepcionei alguém. \n 2 - sim, me sinto culpado e que fiz coisas ruins. \n3 - sim, penso que tudo que estou passando é um castigo para mim. \n 4 - sim, eu escuto uma voz dizendo que sou muito ruim. ");
    }
    // tercera
    function fq3 (agent){
        agent.add("Nessa última semana, você teve pensamentos de que não vale a pena viver ou que você estaria melhor morto?\n 0 - não, em nenhum momento pensei dessa forma. \n1- sim, as vezes acho que não vale a pena viver.\n2- sim, queria morrer e estou pensando muito na minha morte.  \n3- sim, estou pensando em suicídio. \n 4- sim, eu tentei suicídio. ");
    }
    //funcion 4
    function fq4 (agent){
        agent.add("Como tem sido para iniciar seu sono na última semana?\n0- não tenho dificuldades para dormir.   \n1- tenho dificuldades para começar a dormir, em alguns dias demoro mais do que meia hora. \n2- tenho dificuldades para iniciar o sono todas as noites, demoro muito.");}

    function fq5 (agent){
            agent.add("Durante essa última semana, você tem acordado no meio da noite?\n0- não acordo no meio da noite. \n1- tenho o sono agitado. \n2- acordo durante a noite. ");
        }

    function  fq6 (agent){
            agent.add(" Em relação a hora que acorda, na última semana tem acordo muito cedo, fora do seu horário habitual?\n0- não, acordo normalmente no meu horário habitual. \n1- acordo antes do meu horário habitual, mas consigo ainda voltar a dormir.\n2- acordo antes do meu horário habitual e não consigo voltar a dormir.");
        }    

    function fq7 (agent){
            agent.add("Como você tem passado seu tempo na última semana, você se sente interessado em fazer suas atividades ou você tem de se forçar? Você parou de fazer atividades que costumava fazer? \n0 - sem dificuldades.\n1- tenho pensamentos e sentimentos de incapacidade, quero fazer mas me sinto cansado, em relação as minhas atividades de trabalho ou passatempos. \n2 - não tenho mais interesse nas minhas atividades de trabalho ou passatempos, preciso me esforçar para o trabalho ou outras atividades. \n3 - quase não faço mais atividades de trabalho ou passatempos e minha produtividade caiu muito.  \n4 - parei com as atividades de trabalho e passatempos, devido ao meu estado atual. ");
        }    

    function fq8 (agent){
            agent.add("Você tem se sentido mais tenso ou irritado nesta última semana?\n0- não me sinto mais tenso ou irritado. \n 1- sim, um pouco mais tenso e irritado do que o normal. \n 2- sim, estou muito mais preocupado com coisas do cotidiano que não deveriam me causar preocupação. \n3- sim, fico a maior parte do tempo preocupado com tudo. \n4- sim, percebo que minha preocupação é tão grande a ponto de me sentir com medo. \n");
        }
    
        function fq9 (agent){
            agent.add("Na última semana, você sofreu de alguns dos seguintes sintomas físicos: boca seca, indigestão, dor de cabeça, falta de ar, suor excessivo? \n 0- não. \n1- não tenho certeza, pode ser que sim. \n2- sim, de forma leve, apresentei algum desses sintomas, mas não me causou prejuízo. \n3- sim, de forma moderada, apresentei esses sintomas e aconteceram mais do que 1 dia.  \n4- sim, de forma grave, apresentei muitos destes sintomas, são persistentes e me causam bastante prejuízos.");
        }

        function fq10 (agent){
            agent.add("Como tem estado seu apetite nesta última semana? \n0- meu apetite está normal. \n1- estou sem apetite, mas consigo comer.  \n2- estou sem apetite, só como com muita insistência.\n");
        }

        function fq11 (agent){
            agent.add("Como tem estado sua energia nesta última semana?\n0- normal. \n1- me sinto com o corpo cansado e dolorido, sem energia, em alguns dias da semana. \n2- me sinto com o corpo cansado e dolorido, sem energia, o tempo todo. \n");
        }

        function fq12 (agent){
            agent.add("Como tem estado seu interesse por sexo nesta semana? \n0- normal. \n1- as vezes percebo que falta vontade para fazer sexo. \n2- perdi completamente a minha vontade para fazer sexo. \n");
        }

        function fq13 (agent){
            agent.add("Na última semana, o quanto você tem se preocupado com a sua saúde física ou com o funcionamento de seu corpo (comparado ao habitual)?\n0- não percebo diferença. \n1- percebi que comecei a me preocupar com a minha saúde e o funcionamento do meu corpo.\n2- tenho estado muito mais preocupado com a minha saúde e o funcionamento do meu corpo.\n3- tenho queixas frequentes e estou procurando por ajuda. \n4- acredito que estou muito doente, tenho uma doença grave. \n");
        }

        function fq14 (agent){
            agent.add("Você perdeu algum peso devido a seu atual estado? \n0- não tive perda de peso associada ao meu estado atual.  \n1- sim, tive perda de peso, provavelmente associada ao meu estado atual, perdi menos de meio quilo.\n2- sim, tive perda de peso com toda certeza devido ao meu estado atual, perdi mais de meio quilo. ");
        }

        function fq15 (agent){
            agent.add(" Como você é normalmente, comparado com outras pessoas, em relação a seus níveis de energia e humor: \n0 - geralmente meus níveis de energia e humor são menores do que os de outras pessoas. \n1 - sempre meus níveis de energia e humor são equilibrados e estáveis. \n2 - geralmente meus níveis de energia e humor são maiores do que os de outras pessoas.\n3 - frequentemente passo por períodos de altos e baixos em relações ao meus níveis de energia e humor. \n");
        }

        function fq16 (agent){
            agent.add("Por favor, agora gostaria que você tente lembrar de um período em que você esteve num estado “para cima” em relação a seus níveis de energia e humor.\n Como você se sentia na época?\nPor favor, responda a todas estas questões, de acordo como você se sentia nesta época na fase “pra cima”, independente do seu estado atual. \n Muito importante: Importante: nesta resposta digite sonho 1 ou sonho 0, dependendo de sua escolha, não esqueça a palavra sonho \nPreciso de menos sono. \n0-Não \n1- Sim");
        }

        function fq17 (agent){
            agent.add("Eu me sinto com mais energia e mais ativo(a). \n0-Não \n 1- Sim");
        }

        function fq18 (agent){
            agent.add(" Fico mais autoconfiante. \n0-Não \n1- Sim");
        }

        function fq19 (agent){
            agent.add("Me entusiasmo mais com meu trabalho.\n 0-Não \n1- Sim");
        }

        function fq20 (agent){
            agent.add("Fico mais sociável (faço mais ligações telefônicas, saio mais). \n0-Não \n1- Sim");
        }

        function fq21 (agent){
            agent.add("Quero viajar ou viajo mais. \n0-Não \n 1- Sim");
        }

        //22 en adelante
        function fq22 (agent){
            agent.add("Tenho tendência a dirigir mais rápido ou a me arriscar mais enquanto dirijo. \n0-Não \n1- Sim");
        }

        function fq23 (agent){
            agent.add("Gasto mais ou gasto dinheiro demais. \n 0-Não \n1- Sim ");
        }

        function fq24 (agent){
            agent.add("Me arrisco mais em minha vida diária (no meu trabalho e/ou outras atividades)\n0-Não \n1- Sim ");
        }

        function fq25 (agent){
            agent.add("Fico mais ativo(a) fisicamente (esporte, etc.). \n0-Não  \n1- Sim");
        }

        function fq26 (agent){
            agent.add("Planejo mais atividades e projetos. \n0-Não \n1- Sim");
        }

        function fq27 (agent){
            agent.add("tenho mais idéias, fico mais criativo(a).\n0-Não \n1- Sim");
        }

        function fq28 (agent){
            agent.add("Fico menos tímido(a) ou inibido(a). \n0-Não \n1- Sim");
        }

        function fq29 (agent){
            agent.add("Uso roupas/maquiagem mais coloridas e extravagantes.\n 0-Não \n1- Sim");
        }

        function fq30 (agent){
            agent.add("Quero me encontrar ou de fato me encontro com mais pessoas.\n  0-Não \n 1- Sim");
        }
        // 31 en adelante

        function fq31 (agent){
            agent.add("Ok, esta informação é muito importante para lhe dar um pré-diagnóstico, agora, por favor digite a palavra 'continue' após sua escolha, \n por exemplo '0 continue' - '1 continue' , dependendo de sua resposta... \n\nFico mais interessado(a) em sexo e/ou tenho desejo sexual aumentado. \n0-Não (0 continue) \n1- Sim (1 continue)");
        }

        function fq32 (agent){
            agent.add("Paquero mais e/ou fico mais ativo(a) sexualmente. \n0-Não \n1- Sim");
        }

        function fq33 (agent){
            agent.add(" Falo mais.\n0-Não\n 1- Sim");
        }

        function fq34 (agent){
            agent.add("Penso mais rápido.\n0-Não \n1- Sim");
        }

        function fq35 (agent){
            agent.add("Faço mais piadas ou trocadilhos quando falo.\n0-Não\n1- Sim");
        }

        function fq36 (agent){
            agent.add("Eu me distraio com mais facilidade.\n 0-Não \n1- Sim");
        }

        function fq37 (agent){
            agent.add("Eu me envolvo em muitas coisas novas.\n0-Não \n1- Sim");
        }

        function fq38 (agent){
            agent.add("Meus pensamentos pulam de assunto rapidamente.\n0-Não \n1- Sim");
        }

        function fq39 (agent){
            agent.add("Faço coisas mais rapidamente e/ou com maior facilidade.\n0-Não \n1- Sim");
        }

        function fq40 (agent){
            agent.add("Fico mais impaciente e/ou fico irritado(a) mais facilmente. \n0-Não \n1- Sim");
        }
        //
        function fq41 (agent){
            agent.add("Posso ser cansativo(a) ou irritante para os outros.\n0-Não \n1- Sim");
        }

        function fq42 (agent){
            agent.add("Eu me envolvo em mais discussões e disputas.\n0-Não \n1- Sim");
        }

        function fq43 (agent){
            agent.add("Meu humor fica melhor, mais otimista.\n0-Não \n1- Sim siempre ");
        }

        function fq44 (agent){
            agent.add(" Bebo mais café. \n0-Não \n1- Sim");
        }

        function fq45 (agent){
            agent.add("Fumo mais cigarros. \n0-Não \n 1- Sim");
        }

        function fq46 (agent){
            agent.add("Bebo mais álcool.\n0-Não \n1- Sim");
        }

        function fq47 (agent){
            agent.add("Uso mais drogas (sedativos, tranqüilizantes, estimulantes, entre outros). \n 0-Não \n 1-Sim");
        }

        function fq48 (agent){
            agent.add("Via de regra, qual foi a duração de seus “altos” (em média):\n0-  de 1 a 3 dias \n1-  de 4 a 7 dias \n2- maior que 1 semana.\n3- maior que 1 mês");
        }

        function fdiag (agent){
            agent.add("SU DIAGNOSTICO ES");
        }

        function fcita (agent){
            agent.add("Você gostaria de marcar uma consulta com um especialista médico?");
        }
        //mapeo de fullfilment hacia dialogflow
        var intentMap = new Map ();

        intentMap.set('webhookDemo', demo);
        //TEST INTENTMAP
        intentMap.set('Qname', pq1name);

        intentMap.set('Qemail', pq2name);

        intentMap.set('Qcpf', pq3name);
        //test q1
        intentMap.set('Q1', fq1);
        //test q2
        intentMap.set('Q2', fq2);
        //test q3
        intentMap.set('Q3', fq3);

        intentMap.set('Q4', fq4);

        intentMap.set('Q5', fq5);

        intentMap.set('Q6', fq6);

        intentMap.set('Q7', fq7);

        intentMap.set('Q8', fq8);

        intentMap.set('Q9', fq9);

        intentMap.set('Q10', fq10);

        intentMap.set('Q11', fq11);

        intentMap.set('Q12', fq12);

        intentMap.set('Q13', fq13);

        intentMap.set('Q14', fq14);

        intentMap.set('Q15', fq15);

        intentMap.set('Q16', fq16);

        intentMap.set('Q17', fq17);

        intentMap.set('Q18', fq18);

        intentMap.set('Q19', fq19);

        intentMap.set('Q20', fq20);

        intentMap.set('Q21', fq21);

        intentMap.set('Q22', fq22);

        intentMap.set('Q23', fq23);

        intentMap.set('Q24', fq24);

        intentMap.set('Q25', fq25);

        intentMap.set('Q26', fq26);

        intentMap.set('Q27', fq27);

        intentMap.set('Q28', fq28);

        intentMap.set('Q29', fq29);

        intentMap.set('Q30', fq30);

        intentMap.set('Q31', fq31);

        intentMap.set('Q32', fq32);

        intentMap.set('Q33', fq33);

        intentMap.set('Q34', fq34);

        intentMap.set('Q35', fq35);

        intentMap.set('Q36', fq36);

        intentMap.set('Q37', fq37);

        intentMap.set('Q38', fq38);

        intentMap.set('Q39', fq39);

        intentMap.set('Q40', fq40);

        intentMap.set('Q41', fq41);

        intentMap.set('Q42', fq42);

        intentMap.set('Q43', fq43);

        intentMap.set('Q44', fq44);

        intentMap.set('Q45', fq45);

        intentMap.set('Q46', fq46);

        intentMap.set('Q47', fq47);

        intentMap.set('Q48', fq48);

        intentMap.set('Diagnostico', fdiag);

        intentMap.set('Cita', fcita);

        agent.handleRequest (intentMap);


    });


//conexion a la base de datos 2
const username = "USERNAME"
const password = "PASSWORD"
const dbname = "DBNAME"

const uri = `mongodb+srv://${username}:${password}@XXXXXXXXXcluster0.bzgjq.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))


// Funciones de Express Server

server.get('/', (req, res)=>{
    res.send("Express y Node JS Instalados Ok");
    
});

server.get('/usuario', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify( [
       { nombre :'Luis', edad : 20},
       { nombre :'Roberto', edad : 30},
       { nombre :'Juan', edad : 40},
       { nombre :'Carlos', edad : 80},
       { nombre :'Leo', edad : 22}]));
});

server.listen(3000, function(){
    console.log('Server running Express y NodeJs OK');
});


//console.log(op);
//console.log(op.suma(369, 500));
