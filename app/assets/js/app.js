 var vm = new Vue({
     el: '#app',
     data: {
         playerHealth: 100,
         enemyHealth: 100,
         gameIsRunning: false,
         turns: []

     },
     methods: {
         startGame: function() {
             this.gameIsRunning = true;
             this.playerHealth = 100;
             this.enemyHealth = 100;
             this.turns = [];
         },
         monsterAttack:function(){
             var damage = this.calculateDamage(5, 12);
             this.playerHealth -= damage;
             this.checkWin();

             this.turns.unshift({
                isPlayer:false,
                text:'Monster hits Player for ' + damage 
             });
         },
         attack: function() {
             let damage  = this.calculateDamage(3,10);
             this.enemyHealth -= damage;
             this.turns.unshift({
                isPlayer:true,
                text:'Player hits Monster for ' + damage 
             });
             if (this.checkWin()) {
                 return;
             }

            this.monsterAttack();
         },
         specialAttack: function() {
            let damage  = this.calculateDamage(3,10);
             this.enemyHealth -= damage;
             this.turns.unshift({
                isPlayer:true,
                text:'Player hits hard Monster for ' + damage 
             });
             if (this.checkWin()) {
                 return;
             }

             this.monsterAttack();
         },
         heal: function() {

            let pheal = 10;
            if(this.playerHealth <= 90){
                this.playerHealth += pheal;
            } else {
                this.playerHealth = 100;
            }
            
            this.turns.unshift({
                isPlayer:true,
                text:'Player heals for ' + pheal
             });
            this.monsterAttack();

         },
         giveUp: function() {

            this.gameIsRunning = false;


         },
         calculateDamage: function(min, max) {
             return Math.max(Math.floor(Math.random() * max) + 1, min);
         },
         checkWin: function() {
             if (this.enemyHealth <= 0) {
                 if (confirm('You won! New Game?')) {
                     this.startGame();
                 } else {
                     this.gameIsRunning = false;
                 }
                 return true;
             } else if (this.playerHealth <= 0) {
                 if (confirm('You lost! New Game?')) {
                     this.startGame();
                 } else {
                     this.gameIsRunning = false;
                 }
                 return true;
             }
             return false;
         }

     },

     computed: {

     }
 });
