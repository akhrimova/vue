const store = new Vuex.Store({

  state:{

      news:[{

          title:"How to improve reaching behind your back?",

          text:"The ability to reach behind your back doesn't seem so important until it is taken away from you. Washing your back, grabbing your wallet, taking off your bra, putting on a belt, you name it. All of these simple things can make life really tough the moment you can no longer do them without an issue! However, you can get this motion back with the right exercises, discipline, and ultimately patience.In this article, you'll learn how to improve reaching behind your back.",

          like:200,

          reposts:5,

          views:300

          

      },{

          title:"Exercises for wrist pain",

          text:"Wrist and hand pain can be debilitating since we rely on our hands for an endless amount of everyday tasks, and even more so with the use of smartphones. Studies have shown that smartphone usage with poor mechanics and joint position can significantly increase the incidence rate of carpal tunnel (3). Another study showed 50% of the participants had a positive test for a thumb pathology called De Quervain’s tenosynovitis from using their cellphones (4). These pathologies are due to wear-and-tear associated with overloading the tissues around the wrists and hand",

          like:150,

          reposts:11,
    
          views:300

      },{

          title:"How to change running from safely?",

          text:"So you want to change running form? It is not uncommon for runners to explore changing how they run. Whether it's exploring different training methods, switching shoes, or adjusting how their foot contacts the ground - some runners will try anything to improve performance and minimize pain and injury risk. In this article, you will learn common running forms, running specific exercises, when shoes matter, and how to change running form safely.",

          like:120,

          reposts:13,

          id:3,

          views:200

      }],

      user:{

          address:"Russia, Saint-Petersburg, st. Sadovaja home 1/1",

          tel:"+7(812)111-11-11",

          mob:"+7(911)167-55-07",

          instagramm:"@rehab",

          mail:"rehab@gmail.com",


          

      }

  }

});

    var news=Vue.component("news",{

        props:["news"],

        template:` <div class="well">

      <h4>{{news.title}}</h4>

      <p class="body">{{news.text}}</p>

      <p class="footer">like:{{news.like}} 

      repost: {{news.reposts}} views: {{news.views}}</p>

    </div>`

    })

    var User=Vue.component("user",{

        props:["user"],

        template:"<table class='table'><tr><td>Address</td><td>{{user.address}}</td></tr><tr><td>Tel.</td><td>{{user.tel}}</td></tr><tr><td>Mob.</td><td>{{user.mob}}</td></tr><td>Instagramm</td><td>{{user.instagramm}}</td></tr><tr><td>Mail</td><td>{{user.mail}}</td></tr>"
        

    });

    let UserPage=Vue.component("userpage",{

        template:"<user :user='$store.state.user'></user>"

    })

    var Home = Vue.component('home',{ template: "<div><h1>News</h1><p>Last news</p><news v-for='i in $store.state.news' :news='i'></news></div>" });

    var About = { template: "<div><h1>About</h1><p>This page has been put together to help bridge the gap between research and application. To provide the best material possible, a wide variety of ideas, concepts, and theories will be shared by many great professionals. In order to better understand how to optimize training, the open discussion between researcher and practitioner is required.</p></div>" };

    var routes = [

      { path: '/', component: Home },

      { path: '/user',component: UserPage},

      { path: '/about', component: About}

    ];

    

    var router = new VueRouter({

      routes: routes,

    });

    window.onload=function(){

    var app = new Vue({

      store,

      el: '#app',

      router: router,

      

    });}