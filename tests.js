window.onload = function () {
  var app = new Vue({
    el: '#app',
    data: {
      tests: [
        { name: 'comma rotation', description: 'commas are rotated peroperly', pass: null, started: false },
        { name: 'exclamation point', description: 'exclamation points stand up straight', pass: null, started: false },
        { name: 'run-on sentences', description: 'run-on sentences don\'t run forever', pass: null, started: false },
        { name: 'question marks', description: 'question marks curl down, not up', pass: null, started: false },
        { name: 'semicolons', description: 'semicolons are adequately waterproof', pass: null, started: false },
        { name: 'capital letters', description: 'capital letters can do yoga', pass: null, started: false }
      ]
    },
    methods: {
      generateDummyTest: function (test) {
        var testPassed = Math.random() > 0.5;
        test.pass = testPassed
      },

      run_tests: function () {
        var delay = 7000 + Math.random() * 7000
        var self = this;
        this.tests.forEach(function(test, index) {
          test.started = true
          setTimeout(()=>{
             self.generateDummyTest(test);
          }, delay, test);
        })
      },

      sortFunc: function () {
        var tests_started = this.tests.slice().sort(function(a, b){
          return (a.started > b.started) ? 1 : -1;
        });

        return tests_started.slice().sort(function(a, b){
          return (a.pass > b.pass) ? 1 : -1;
        });
      }
    },
    computed: {
      sortedList: function () {
        return this.tests.sort((a, b) => a.pass - b.pass)
      }
    }
  });
}