describe('this', function () {
  it('setTimeout', function (done) {
    var obj = {
      say: function () {
        setTimeout(() => {
          // this 是什么？想想为什么？
          // x this指全局的作用域，window
          // √ this指say这个函数
          this.should.equal(null)
          done()
        }, 0)
      }
    }

    obj.say()
  })

  it('global', function () {
    function test() {
      // this 是什么？想想为什么？
      // this 指向 window
      this.should.equal(null)
    }
    test()
  })

  describe('bind', function () {
    it('bind undefined', function () {
      var obj = {
        say: function () {
          function _say() {
            // this 是什么？想想为什么？
            // √ this指say这个函数
            this.should.equal(null)
          }
          return _say.bind(obj)
        }()
      }

      obj.say()
    })

    it('bind normal', function () {
      var obj = {}
      obj.say = function () {
        function _say() {
          // this 是什么？想想为什么？
          // this 指say这个函数
          this.should.equal(null)
        }
        return _say.bind(obj)
      }()
      obj.say()
    })
  })
})
